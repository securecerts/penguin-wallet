import { createStore } from "vuex";
import algosdk from "algosdk";
// const Testclient= new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
// const TestIndexer= new algosdk.Indexer('', 'https://testnet-idx.algonode.cloud', '');
// const Mainclient= new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '');
// const MainIndexer= new algosdk.Indexer('', 'https://mainnet-idx.algonode.cloud', '');

export default createStore({
  state() {
    return {
      mnemonic: [],
      account: "",
      walletName: "",
      accountList: [],
    };
  },
  getters: {
    mnemonic(state) {
      return state.mnemonic;
    },
  },
  mutations: {
    upadteMnemonic(state, mnemonic) {
      state.mnemonic = mnemonic;
    },
    savePassword(_, encryptedPassword) {
      localStorage.setItem("password", encryptedPassword);
    },
  },
  actions: {
    createAddress(context) {
      // Create a new address
      const account = algosdk.generateAccount();
      // Save the secret key
      context.state.account = account;
      // Splitting the mnemonic to create an array of strings
      const mnemonic = algosdk.secretKeyToMnemonic(account.sk).split(" ");
      context.commit("upadteMnemonic", mnemonic);
    },
    saveAddress(context, accountName) {
      //store the newly created account in local storage and then save the same to store for display
      localStorage.setItem(accountName, context.state.account);
      context.state.accountList.push({ accountName: context.state.account });
    },
    generateAccount(context, mnemonic) {
      context.state.account = algosdk.mnemonicToSecretKey(mnemonic);
    },
  },
  modules: {},
});
