<template>
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <h1>Save Account</h1>
    </div>
    <div class="section mb-5 p-2">
      <form action="index.html">
        <div class="card">
          <div class="card-body">
            <div v-if="currentOperation == 'walletGeneration'"  class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">Account Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="password1"
                  autocomplete="off"
                  placeholder="Unique Name"
                  v-model="accountName"
                />
              </div>
            </div>
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  autocomplete="off"
                  placeholder="Your password"
                  v-model="inputPassword"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="form-button-group transparent margin_special">
          <button
            @click.prevent="selectOperation"
            type="submit"
            class="btn btn-primary btn-block btn-lg"
          >
            Let's Go
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- * App Capsule -->
</template>
<script>
import { mapGetters } from "vuex";
import store from "../store";
import router from "../router";
export default {
  data() {
    return {
      inputPassword: "",
      accountName: "",
      routerParams: this.$route.params,
    };
  },
  computed:{
    ...mapGetters(["currentOperation"])
  },
  methods: {
    selectOperation(){
      if(this.currentOperation == "walletGeneration"){
        this.saveAddress()
      }else if(this.currentOperation == "optinChannel"){
        this.notiboyChannelOptin()
      }
    },
    saveAddress() {
      //Receiving password in encrypted format from local storage and decrypt it.
      const password = localStorage.getItem("password");
      const decryptedPassword = this.$CryptoJS.AES.decrypt(
        password,
        this.inputPassword
      ).toString(this.$CryptoJS.enc.Utf8);
      if (decryptedPassword === this.inputPassword && this.accountName != "") {
        //Adding the created account/address name to the list of addresses and store it in local storage.
        const addressList = JSON.parse(localStorage.getItem("addressList"));
        if (addressList.indexOf(this.accountName) > -1) return;
        addressList.push(this.accountName);
        localStorage.setItem("addressList", JSON.stringify(addressList));
        store.dispatch("saveAddress", this.accountName).then(() =>{
          router.replace({ name: "home" });
        });
      } else {
        return;
      }
    },
    notiboyChannelOptin(){
      //Receiving password in encrypted format from local storage and decrypt it.
      const password = localStorage.getItem("password");
      const decryptedPassword = this.$CryptoJS.AES.decrypt(
        password,
        this.inputPassword
      ).toString(this.$CryptoJS.enc.Utf8);
      if (decryptedPassword === this.inputPassword){
        store.dispatch("notiboyChannelOptin").then(() =>{
          router.replace({ name: "channels" });
        });
      } 
    }
  },
};
</script>
