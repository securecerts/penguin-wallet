<template>
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <h1>Update Password</h1>
    </div>
    <div class="section mb-5 p-2">
      <form action="index.html">
        <div class="card">
          <div class="card-body">
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password0">Old Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password0"
                  autocomplete="off"
                  placeholder="Old Password"
                  v-model="oldPassword"
                />
              </div>
            </div>
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">New Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  autocomplete="off"
                  placeholder="Your password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password2">Password Again</label>
                <input
                  type="password"
                  class="form-control"
                  id="password2"
                  autocomplete="off"
                  placeholder="Type password again"
                  v-model="repeatPassword"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form-button-group transparent margin_special">
          <button
            @click.prevent="savePassword"
            type="submit"
            class="btn btn-primary btn-block btn-lg"
          >
            Save
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
      oldPassword: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    async savePassword() {
      const encryptedOldPassword = localStorage.getItem("password");
      const decryptedOldPassword = await this.$CryptoJS.AES.decrypt(
        encryptedOldPassword,
        this.oldPassword
      ).toString(this.$CryptoJS.enc.Utf8);
      if (
        this.oldPassword == decryptedOldPassword &&
        this.password == this.repeatPassword &&
        this.password != "" &&
        this.oldPassword != ""
      ) {
        const encryptedPassword = await this.$CryptoJS.AES.encrypt(
          this.password,
          this.password
        ).toString();
        store.commit("savePassword", encryptedPassword);
        router.replace({ name: "home" });
      } else {
        console.log("Password doesnot match");
      }
    },
  },
};
</script>
