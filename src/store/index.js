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
      account: [],
      walletName: "",
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
      console.log(account);
      // Save the secret key
      context.state.secretKey = account;
      // Splitting the mnemonic to create an array of strings
      const mnemonic = algosdk.secretKeyToMnemonic(account.sk).split(" ");
      context.commit("upadteMnemonic", mnemonic);
    },
    // saveAddress(context){

    // }
  },
  modules: {},
});
