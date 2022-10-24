<template>
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <h1>Password</h1>
      <h4>Create Password</h4>
    </div>
    <div class="section mb-5 p-2">
      <form action="index.html">
        <div class="card">
          <div class="card-body">
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">Password</label>
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
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    savePassword() {
      if (this.password === this.repeatPassword) {
        const encryptedPassword = this.$CryptoJS.AES.encrypt(
          this.password,
          this.password
        ).toString();
        store.commit("savePassword", encryptedPassword);
        let addressList = [];
        localStorage.setItem("addressList", JSON.stringify(addressList));
        router.push({ name: "home" });
      } else {
        return;
      }
    },
  },
};
</script>
