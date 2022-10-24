<template>
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <h1>Password</h1>
      <h4>Create Account</h4>
    </div>
    <div class="section mb-5 p-2">
      <form action="index.html">
        <div class="card">
          <div class="card-body">
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">Account Name</label>
                <input
                  type="password"
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

        <div
          @click="saveAddress"
          class="form-button-group transparent margin_special"
        >
          <button type="submit" class="btn btn-primary btn-block btn-lg">
            Save Address
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- * App Capsule -->
</template>
<script>
import store from "../store";
import router from "../router";
export default {
  data() {
    return {
      inputPassword: "",
      accountName: "",
    };
  },
  methods: {
    saveAddress() {
      //Receiving password in encrypted format from local storage and decrypt it.
      const password = localStorage.getItem("password");
      const decryptedPassword = this.$CryptoJS.AES.decrypt(
        password,
        this.password
      ).toString(this.$CryptoJS.enc.Utf8);
      if (decryptedPassword === this.password && this.accountName != "") {
        store.dispatch("saveAddress", this.accountName);
        router.replace({ name: "home" });
      } else {
        return;
      }
    },
  },
};
</script>
