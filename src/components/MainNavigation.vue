<template>
  <!-- App Header -->
  <div class="appHeader bg-primary text-light">
    <div class="left">
      <a
        class="headerButton"
        data-bs-toggle="modal"
        data-bs-target="#sidebarPanel"
      >
        <img
          src="../assets/img/small-icon.png"
          alt="image"
          class="imaged rounded w32"
        />
      </a>
    </div>
    <div class="pageTitle">Penguin Wallet</div>
    <div class="right">
      <router-link :to="{ name: 'notifications' }" class="headerButton">
        <img src="../assets/icons/notifications.svg" width="30" alt="" />
        <span class="badge badge-danger">8</span>
      </router-link>
    </div>
  </div>
  <!-- * App Header -->
</template>
