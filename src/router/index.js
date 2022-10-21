import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TransactionDetails.vue"),
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/WalletNotifications.vue"
      ),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PortfolioDetails.vue"),
  },
  {
    path: "/channels",
    name: "channels",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/NotificationChannels.vue"
      ),
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WalletSettings.vue"),
  },
  {
    path: "/updatepassword",
    name: "password",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UpdatePassword.vue"),
  },
  {
    path: "/trems",
    name: "terms",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TermsConditions.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PrivacyPolicy.vue"),
  },
  {
    path: "/createImport",
    name: "createImport",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateImport.vue"),
  },
  {
    path: "/createAddress",
    name: "createAddress",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateAddress.vue"),
  },
  {
    path: "/importAddress",
    name: "importAddress",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ImportAddress.vue"),
  },
  {
    path: "/checkpassphrase",
    name: "checkPassphrase",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CheckPassphrase.vue"),
  },
  {
    path: "/nodes",
    name: "nodes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AlgoNodes.vue"),
  },
];

const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory(process.env.BASE_URL)
    : createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
