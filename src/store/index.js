import { createStore } from "vuex";
import algosdk from "algosdk";
const Testclient= new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
const TestIndexer= new algosdk.Indexer('', 'https://testnet-idx.algonode.cloud', '');
const Mainclient= new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '');
const MainIndexer= new algosdk.Indexer('', 'https://mainnet-idx.algonode.cloud', '');

export default createStore({
  state() {
    return {
      mnemonicObject: {},
      mnemonic: [],
      walletName: "",
      accountList: [], //List of accounts created or imported to the wallet
      accountsDetails: [], //an object containing account name and the sk related tot he address
      selectedIndex:0,
      indexer:"",
      client:"",
      algoBalance:0,
      addressAssets:[],//List of assets in an address
      assetsOptedIn:0,
      addressAssetDetails:[], //contains the list of ASAs along with 
      currentAddress:"",
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
    algoBalance(state){
      return algosdk.microalgosToAlgos(state.algoBalance)
    },
    addressAssetDetails(state){
      return state.addressAssetDetails;
    },
    currentAddress(state){
      return state.currentAddress;
    }
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
    updateAddressDetails(state,accountInfo){
      state.algoBalance = accountInfo["amount"];
      state.addressAssets = accountInfo["assets"];
      state.assetsOptedIn = accountInfo["total-assets-opted-in"];
      state.addressAssetDetails.push({assetId:0,assetName:"Algo",assetBalance:accountInfo["amount"]})
    },
    updateCurrentAddress(store,address){
      store.currentAddress = address;
    }
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
      context.commit("updateAccountList",newList)
      localStorage.removeItem(accountName);
    },  
    //et details about a certain address
   async getAddressData(context,Index){
      try {
        context.state.selectedIndex = Index;
        const accountList = JSON.parse(localStorage.getItem("addressList"));
        const accountDetails = JSON.parse(localStorage.getItem(accountList[Index]));
        context.dispatch("getNode");
        const address = algosdk.mnemonicToSecretKey(accountDetails).addr;
        console.log(address)
        //The address of selected account
        context.commit("updateCurrentAddress",address)
        const accountInfo = await context.state.client.accountInformation(address).do();
        context.state.addressAssetDetails = [];
        context.commit("updateAddressDetails",accountInfo)
        context.dispatch("getAssetData")
      } catch (error) {
        console.log("Error in fetching data")
      }
    },
    // Get details of each asset with in the wallet along with balance
    async getAssetData(context){
      const listAssets = context.state.addressAssets;
      let accountAssets;
      for(let i=0; i< listAssets.length; i++){
        try {
          accountAssets = await context.state.indexer.lookupAssetByID(listAssets[i]["asset-id"]).do();    
        } catch (e) {
          console.log(e)
          continue
        }
        context.state.addressAssetDetails.push({assetId:listAssets[i]["asset-id"],assetName:accountAssets["asset"]["params"]["name"],assetBalance:listAssets[i]["amount"]}) 
      }
    },
    getNode(context){
      const node = localStorage.getItem("node");
      if(node == "mainnet"){
        context.state.indexer = MainIndexer;
        context.state.client = Mainclient;
      }else if(node == "testnet"){
        context.state.indexer = TestIndexer;
        context.state.client = Testclient;
      }
    },
    sendAsset(_,senderDetails){
      if(senderDetails.operation == "send"){
        if(senderDetails.assetId == 0){
          console.log("testing")
        }
      }
    }
  },
  modules: {},
});
