<template>
  <!-- App Bottom Menu -->
  <div class="appBottomMenu">
    <router-link
      @click="selection('wallet')"
      to="/"
      :class="selectedMenu == 'wallet' ? 'item active' : 'item'"
    >
      <div class="col">
        <img src="../assets/icons/wallet-outline.svg" width="22" alt="wallet" />
        <strong>Wallet</strong>
      </div>
    </router-link>
    <router-link
      @click="selection('portfolio')"
      :to="{ name: 'portfolio' }"
      :class="selectedMenu == 'portfolio' ? 'item active' : 'item'"
    >
      <div class="col">
        <img
          src="../assets/icons/briefcase-outline.svg"
          width="22"
          alt="portfolio"
        />
        <strong>Portfolio</strong>
      </div>
    </router-link>
    <router-link
      @click="selection('channels')"
      :to="{ name: 'channels' }"
      :class="selectedMenu == 'channels' ? 'item active' : 'item'"
    >
      <div class="col">
        <img
          src="../assets/icons/chatbubbles-outline.svg"
          width="22"
          alt="channels"
        />
        <strong>Channels</strong>
      </div>
    </router-link>
    <router-link
      @click="selection('transactions')"
      :to="{ name: 'transactions' }"
      :class="selectedMenu == 'transactions' ? 'item active' : 'item'"
    >
      <div class="col">
        <img
          src="../assets/icons/analytics-outline.svg"
          width="22"
          alt="transactions"
        />
        <strong>Transactions</strong>
      </div>
    </router-link>
    <router-link
      @click="selection('settings')"
      :to="{ name: 'settings' }"
      :class="selectedMenu == 'settings' ? 'item active' : 'item'"
    >
      <div class="col">
        <img
          src="../assets/icons/settings-outline.svg"
          width="22"
          alt="settings"
        />
        <strong>Settings</strong>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedMenu: "wallet",
    };
  },
  methods: {
    selection(item) {
      this.selectedMenu = item;
    },
  },
};
</script>
