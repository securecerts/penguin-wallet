<template>
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <h1>Password</h1>
      <h4>Enter Your Password</h4>
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
          </div>
        </div>

        <div class="form-button-group transparent margin_special">
          <button
            @click="pullData"
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
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    pullData() {
      if (this.password === this.repeatPassword) {
        const encryptedPassword = this.$CryptoJS.AES.encrypt(
          this.password,
          this.password
        ).toString();
        store.commit("savePassword", encryptedPassword);
      } else {
        return;
      }
    },
  },
};
</script>
