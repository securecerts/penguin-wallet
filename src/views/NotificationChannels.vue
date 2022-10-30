<template>
  <div id="appCapsule">
    <h2 class="text-center mt-4">Channels</h2>
    <ul class="listview image-listview inset mb-2">
      <li>
        <div @click.prevent="checkPassword" class="item mouse-pointer">
          <div class="icon-box bg-primary"></div>
          <div class="in">Opt-In to Channels</div>
        </div>
      </li>
    </ul>
    <p class="text-center">Note: Opt-in will work only in TestNet as of now.</p>
    <ul class="listview image-listview inset mb-2">
      <li v-for="channel in notiboyChannelList" :key="channel.channelName">
        <div class="item">
          <div class="icon-box bg-info"></div>
          <div class="in">{{channel.channelName}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "../store";
import router from "../router";
export default {
  computed: {
    ...mapGetters([
      "notiboyChannelList"
    ]),
  },
  methods:{
    checkPassword(){
      const operation = "optinChannel"
      store.commit("updateOperation",operation)
      router.push({ name: 'inputPassword'})
    }
  },
  created(){
    store.dispatch("getNotiboyChannelList");
  }
}
</script>
<style scoped>
.mouse-pointer{
  cursor: pointer;
}
</style>
