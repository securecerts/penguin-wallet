import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/style.css";
import VueCryptojs from "vue-cryptojs";

createApp(App).use(store).use(VueCryptojs).use(router).mount("#app");
