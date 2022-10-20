<template>
  <!-- App Bottom Menu -->
  <div class="appBottomMenu">
    <router-link to="/" class="item active">
      <div class="col">
        <img src="../assets/icons/wallet-outline.svg" width="22" alt="" />
        <strong>Wallet</strong>
      </div>
    </router-link>
    <router-link :to="{ name: 'portfolio' }" class="item">
      <div class="col">
        <img src="../assets/icons/briefcase-outline.svg" width="22" alt="" />
        <strong>Portfolio</strong>
      </div>
    </router-link>
    <router-link :to="{ name: 'channels' }" class="item">
      <div class="col">
        <img src="../assets/icons/chatbubbles-outline.svg" width="22" alt="" />
        <strong>Channels</strong>
      </div>
    </router-link>
    <router-link :to="{ name: 'transactions' }" class="item">
      <div class="col">
        <img src="../assets/icons/analytics-outline.svg" width="22" alt="" />
        <strong>Transactions</strong>
      </div>
    </router-link>
    <router-link :to="{ name: 'settings' }" class="item">
      <div class="col">
        <img src="../assets/icons/settings-outline.svg" width="22" alt="" />
        <strong>Settings</strong>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
