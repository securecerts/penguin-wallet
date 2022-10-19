<template>
  <main-loader></main-loader>
  <nav>
    <main-navigation></main-navigation>
  </nav>
  <router-view />
  <bottom-menu></bottom-menu>
</template>
<script>
import MainLoader from "@/components/MainLoader.vue";
import MainNavigation from "@/components/MainNavigation.vue";
import BottomMenu from "@/components/BottomMenu.vue";
export default {
  components: {
    mainNavigation:MainNavigation,
    bottomMenu:BottomMenu,
    mainLoader:MainLoader
  },
}
</script>
<style>

</style>
