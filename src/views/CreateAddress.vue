<template>
  <div id="appCapsule">
    <h3 class="text-center mt-2 mb-2">
      Create a passphrase backup <br />for your account
    </h3>
    <p class="px-4 justfy-text">
      Creating a passphrase backup will allow you to recover your account.
      Without the passphrase, If you lose your device, remove the account or
      delete the app, you can permanently lose access to your Algorand account.
      So please write down the passphrase.
    </p>
  </div>
  <div class="section">
    <div class="card special-margin">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="text-center">
              <th scope="col">Sl.No</th>
              <th scope="col">Passphrase</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in mnemonic"
              :key="item"
              class="text-center"
            >
              <th>{{ index + 1 }}</th>
              <td>{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="transparent special-margin-lg">
      <router-link :to="{ name: 'checkPassphrase' }">
        <button class="btn btn-primary btn-block btn-lg">Next</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import store from "../store";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["mnemonic"]),
  },
  created() {
    store.dispatch("createAddress");
  },
};
</script>
<style scoped>
.justfy-text {
  text-align: justify;
}
.special-margin {
  margin-bottom: 40px;
}
.special-margin-lg {
  margin-bottom: 80px;
}
</style>
