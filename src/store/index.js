import { createStore } from "vuex";
import algosdk from "algosdk";
import sdk from "notiboy-js-sdk";
const Testclient = new algosdk.Algodv2(
  "",
  "https://testnet-api.algonode.cloud",
  ""
);
const TestIndexer = new algosdk.Indexer(
  "",
  "https://testnet-idx.algonode.cloud",
  ""
);
const Mainclient = new algosdk.Algodv2(
  "",
  "https://mainnet-api.algonode.cloud",
  ""
);
const MainIndexer = new algosdk.Indexer(
  "",
  "https://mainnet-idx.algonode.cloud",
  ""
);
const notiBoy = new sdk(Testclient, TestIndexer);
export default createStore({
  state() {
    return {
      mnemonicObject: {},
      mnemonic: [],
      walletName: "",
      accountList: [], //List of accounts created or imported to the wallet
      accountsDetails: [], //an object containing account name and the sk related tot he address
      selectedIndex: Number,
      indexer: "",
      client: "",
      algoBalance: 0,
      addressAssets: [], //List of assets in an address
      assetsOptedIn: 0,
      addressAssetDetails: [], //contains the list of ASAs along
      currentAddress: "",
      currentMnemonic: [],
      transactionList: [],
      notiboyChannelList: [],
      notiboyNotifications: [],
      currentOperation: String,
    };
  },
  getters: {
    mnemonic(state) {
      return state.mnemonic;
    },
    accountList(state) {
      return state.accountList;
    },
    accountsDetails(state) {
      return state.accountsDetails;
    },
    algoBalance(state) {
      return algosdk.microalgosToAlgos(state.algoBalance);
    },
    addressAssetDetails(state) {
      return state.addressAssetDetails;
    },
    currentAddress(state) {
      return state.currentAddress;
    },
    selectedIndex(state) {
      return state.selectedIndex;
    },
    transactionList(state) {
      return state.transactionList;
    },
    notiboyChannelList(state) {
      return state.notiboyChannelList;
    },
    notiboyNotifications(state) {
      return state.notiboyNotifications;
    },
    currentOperation(state) {
      return state.currentOperation;
    },
  },
  mutations: {
    upadteMnemonic(state, mnemonics) {
      state.mnemonic = mnemonics.mnemonic;
      state.mnemonicObject = mnemonics.mnemonicObject;
    },
    savePassword(_, encryptedPassword) {
      localStorage.setItem("password", encryptedPassword);
    },
    //Go through the account list and create an object that represent wallet name and sk
    updateAccountList(state, addressList) {
      state.accountList = addressList;
      let accountsDetails = [];
      if (addressList == null) return;
      for (let i = 0; i < addressList.length; i++) {
        accountsDetails.push({
          accountName: addressList[i],
          accountDetails: localStorage.getItem(addressList[i]),
        });
      }
      state.accountsDetails = accountsDetails;
    },
    // Updating asset ids in an address along with algo balance
    updateAddressDetails(state, accountInfo) {
      state.algoBalance = accountInfo["amount"];
      state.addressAssets = accountInfo["assets"];
      state.assetsOptedIn = accountInfo["total-assets-opted-in"];
      state.addressAssetDetails.push({
        assetId: 0,
        assetName: "Algo",
        decimals: 6,
        assetBalance: accountInfo["amount"],
      });
    },
    updateCurrentAddress(state, address) {
      state.currentAddress = address;
    },
    // Updating the current mnemonic for signing transactions
    updateCurrentMnemonic(state, accountDetails) {
      state.currentMnemonic = accountDetails;
    },
    //Updating the index of the wallet selected
    updateSelectedWalletIndex(state) {
      const index = localStorage.getItem("selectedWalletIndex");
      state.selectedIndex = index;
    },
    //Updating the list of transactions from a wallet
    updateTranscationList(state, transactionList) {
      state.transactionList = transactionList;
    },
    updateNotiboyChannelList(state, channelList) {
      state.notiboyChannelList = channelList;
    },
    updateNotiboyNotifications(state, notifications) {
      state.notiboyNotifications = notifications;
    },
    updateOperation(state, operation) {
      state.currentOperation = operation;
    },
  },
  actions: {
    createAddress(context) {
      // Create a new address
      const account = algosdk.generateAccount();
      const mnemonicObject = algosdk.secretKeyToMnemonic(account.sk);
      // Splitting the mnemonic to create an array of strings
      const mnemonic = mnemonicObject.split(" ");
      context.commit("upadteMnemonic", {
        mnemonic: mnemonic,
        mnemonicObject: mnemonicObject,
      });
    },
    saveAddress(context, accountName) {
      //store the newly created account in local storage and then save the same to store for display
      localStorage.setItem(
        accountName,
        JSON.stringify(context.state.mnemonicObject)
      );
      // Store the details of account along with sk to vuex store and local storage
      context.state.accountsDetails.push({
        accountName: context.state.mnemonic,
      });
    },
    generateAccount(context, mnemonicSecret) {
      const mnemonicObject = algosdk.secretKeyToMnemonic(mnemonicSecret.sk);
      const mnemonic = mnemonicObject.split(" ");
      context.commit("upadteMnemonic", {
        mnemonic: mnemonic,
        mnemonicObject: mnemonicObject,
      });
    },
    deleteAccount(context, accountName) {
      const addressList = JSON.parse(localStorage.getItem("addressList"));
      const newList = addressList.filter((e) => e !== accountName);
      localStorage.setItem("addressList", JSON.stringify(newList));
      context.commit("updateAccountList", newList);
      localStorage.removeItem(accountName);
    },
    //Get details about a certain address
    async getAddressData(context, Index) {
      try {
        context.state.selectedIndex = Index;
        const accountList = JSON.parse(localStorage.getItem("addressList"));
        const accountDetails = JSON.parse(
          localStorage.getItem(accountList[Index])
        );
        context.commit("updateCurrentMnemonic", accountDetails);
        context.dispatch("getNode");
        const address = algosdk.mnemonicToSecretKey(accountDetails).addr;
        //The address of selected account
        context.commit("updateCurrentAddress", address);
        const accountInfo = await context.state.client
          .accountInformation(address)
          .do();
        context.state.addressAssetDetails = [];
        context.commit("updateAddressDetails", accountInfo);
        context.dispatch("getAssetData");
      } catch (error) {
        console.log("Error in fetching data");
      }
    },
    // Get details of each asset with in the wallet along with balance
    async getAssetData(context) {
      const listAssets = context.state.addressAssets;
      let accountAssets;
      for (let i = 0; i < listAssets.length; i++) {
        try {
          accountAssets = await context.state.indexer
            .lookupAssetByID(listAssets[i]["asset-id"])
            .do();
        } catch (e) {
          console.log(e);
          continue;
        }
        context.state.addressAssetDetails.push({
          assetId: listAssets[i]["asset-id"],
          assetName: accountAssets["asset"]["params"]["name"],
          decimals: accountAssets["asset"]["params"]["decimals"],
          assetBalance: listAssets[i]["amount"],
        });
      }
    },
    getNode(context) {
      const node = localStorage.getItem("node");
      if (node == "mainnet") {
        context.state.indexer = MainIndexer;
        context.state.client = Mainclient;
      } else if (node == "testnet") {
        context.state.indexer = TestIndexer;
        context.state.client = Testclient;
      }
    },
    async addAsset(context, asset) {
      const currentAddress = context.state.currentAddress;
      const params = await context.state.client.getTransactionParams().do();
      params.fee = 1000;
      params.flatFee = true;
      const amount = 0;
      let txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
        amount: amount,
        assetIndex: Number(asset.assetId),
        from: currentAddress,
        suggestedParams: params,
        to: currentAddress,
      });

      const rawSignedTxn = txn.signTxn(
        algosdk.mnemonicToSecretKey(context.state.currentMnemonic).sk
      );
      const opttx = await context.state.client
        .sendRawTransaction(rawSignedTxn)
        .do();
      await context.dispatch("waitForConfirmation", opttx.txId);
    },
    async sendAsset(context, asset) {
      const currentAddress = context.state.currentAddress;
      const params = await context.state.client.getTransactionParams().do();
      params.fee = 1000;
      params.flatFee = true;
      let txn;
      if (asset.assetId == 0) {
        txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
          from: currentAddress,
          amount: algosdk.algosToMicroalgos(asset.amount),
          suggestedParams: params,
          to: asset.receiverAddress,
        });
      } else {
        const amount = Number(asset.amount * Math.pow(10, asset.decimals));
        txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
          amount: amount,
          assetIndex: Number(asset.assetId),
          from: currentAddress,
          suggestedParams: params,
          to: asset.receiverAddress,
        });
      }
      const rawSignedTxn = txn.signTxn(
        algosdk.mnemonicToSecretKey(context.state.currentMnemonic).sk
      );
      const opttx = await context.state.client
        .sendRawTransaction(rawSignedTxn)
        .do();
      await context.dispatch("waitForConfirmation", opttx.txId);
    },
    async waitForConfirmation(context, txId) {
      let response = await context.state.client.status().do();
      let lastround = response["last-round"];
      // eslint-disable-next-line
      while (true) {
        const pendingInfo = await context.state.client
          .pendingTransactionInformation(txId)
          .do();
        if (
          pendingInfo["confirmed-round"] !== null &&
          pendingInfo["confirmed-round"] > 0
        ) {
          //Got the completed Transaction
          console.log(
            "Transaction " +
              txId +
              " confirmed in round " +
              pendingInfo["confirmed-round"]
          );
          break;
        }
        lastround++;
        await context.state.client.statusAfterBlock(lastround).do();
      }
    },
    async getTransactionDetails(context) {
      const accountTxns = await context.state.indexer
        .lookupAccountTransactions(context.state.currentAddress)
        .do();
      const transactionList = [];
      const addressAssetDetails = context.state.addressAssetDetails;
      for (let i = 0; i < accountTxns.transactions.length; i++) {
        if (
          accountTxns.transactions[i]["asset-transfer-transaction"] != null &&
          accountTxns.transactions[i]["asset-transfer-transaction"] != undefined
        ) {
          for (let j = 0; j < addressAssetDetails.length; j++) {
            if (
              accountTxns.transactions[i]["asset-transfer-transaction"][
                "asset-id"
              ] == addressAssetDetails[j].assetId
            ) {
              transactionList.push({
                assetName: addressAssetDetails[j].assetName,
                assetId:
                  accountTxns.transactions[i]["asset-transfer-transaction"][
                    "asset-id"
                  ],
                amount:
                  accountTxns.transactions[i]["asset-transfer-transaction"][
                    "amount"
                  ],
                decimals: addressAssetDetails[j].decimals,
                receiver:
                  accountTxns.transactions[i]["asset-transfer-transaction"][
                    "receiver"
                  ],
                roundTime: accountTxns.transactions[i]["round-time"],
              });
            }
          }
        } else if (
          accountTxns.transactions[i]["payment-transaction"] != null &&
          accountTxns.transactions[i]["payment-transaction"] != undefined
        ) {
          transactionList.push({
            assetName: "Algo",
            assetId: 0,
            amount:
              accountTxns.transactions[i]["payment-transaction"]["amount"],
            decimals: 6,
            receiver:
              accountTxns.transactions[i]["payment-transaction"]["receiver"],
            roundTime: accountTxns.transactions[i]["round-time"],
          });
        }
      }
      context.commit("updateTranscationList", transactionList);
    },
    async getNotiboyChannelList(context) {
      const channelList = await notiBoy.listPublicChannels();
      context.commit("updateNotiboyChannelList", channelList);
    },
    async getNotiboyNotifications(context) {
      try {
        const personalNotifications = await notiBoy
          .notification()
          .getPersonalNotification(context.state.currentAddress);
        context.commit("updateNotiboyNotifications", personalNotifications);
      } catch (error) {
        console.log("Unable to fetch notifications");
      }
    },
    async notiboyChannelOptin(context) {
      try {
        //opt-in to channel (channel creation)
        const channelName = "";
        const optInTxn = await notiBoy.optin(
          channelName,
          context.state.currentAddress,
          context.state.currentAddress,
          "user"
        );
        // Group transactions received from opt-in
        const signedTxn1 = optInTxn[0].signTxn(
          algosdk.mnemonicToSecretKey(context.state.currentMnemonic).sk
        );
        const signedTxn2 = optInTxn[1].signTxn(
          algosdk.mnemonicToSecretKey(context.state.currentMnemonic).sk
        );
        let groupTxns = [];
        groupTxns.push(signedTxn1);
        groupTxns.push(signedTxn2);
        await Testclient.sendRawTransaction(groupTxns).do();
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
