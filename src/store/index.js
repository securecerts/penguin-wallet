import { createStore } from "vuex";
import algosdk from "algosdk";
// const Testclient= new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
// const TestIndexer= new algosdk.Indexer('', 'https://testnet-idx.algonode.cloud', '');
// const Mainclient= new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '');
// const MainIndexer= new algosdk.Indexer('', 'https://mainnet-idx.algonode.cloud', '');

export default createStore({
  state() {
    return {
      mnemonicObject: {},
      mnemonic: [],
      walletName: "",
      accountList: [],
      accountsDetails: [],
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
  },
  mutations: {
    upadteMnemonic(state, mnemonics) {
      state.mnemonic = mnemonics.mnemonic;
      state.mnemonicObject = mnemonics.mnemonicObject;
    },
    savePassword(_, encryptedPassword) {
      localStorage.setItem("password", encryptedPassword);
    },
    updateAccountList(state, addressList) {
      state.accountList = addressList;
      let accountsDetails = [];
      for (let i = 0; i < addressList.length; i++) {
        accountsDetails.push({
          accountName: addressList[i],
          accountDetails: localStorage.getItem(addressList[i]),
        });
      }
      state.accountsDetails = accountsDetails;
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
    generateAccount(context, mnemonic) {
      context.state.account = algosdk.mnemonicToSecretKey(mnemonic);
    },
    deleteAccount(context, accountName) {
      const addressList = JSON.parse(localStorage.getItem("addressList"));
      const newList = addressList.filter((e) => e !== accountName);
      localStorage.setItem("addressList", JSON.stringify(newList));
      context.state.accountList = newList;
      localStorage.removeItem(accountName);
    },
  },
  modules: {},
});
