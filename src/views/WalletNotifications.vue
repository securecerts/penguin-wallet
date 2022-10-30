<template>
  <div id="appCapsule">
    <div class="section full">
      <ul v-if="notiboyNotifications.length > 0" class="listview">
        <li v-for="notification in notiboyNotifications" :key="notification.timeStamp" class="pt-2 pb-2">
          <div class="in">
            <div class="ml-3">
              <div class="mb-05"><strong>{{notification.channel}}</strong></div>
              <div class="text-small mb-05">
                {{notification.notification}}
              </div>
              <div class="text-xsmall">{{notificationTime(notification.timeStamp)}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- * App Capsule -->
</template>
<script>
import { mapGetters } from "vuex";
import store from "../store";
import date from "date-and-time";
export default {
  computed: {
    ...mapGetters([
      "notiboyChannelList",
      "notiboyNotifications"
    ]),
  },
  methods:{
    notificationTime() {
      return date.format(
        new Date(this.notification.timeStamp * 1000),
        "YYYY/MM/DD HH:mm"
      );
    }
  },
  created(){
    store.dispatch("getNotiboyNotifications");
  }
}
</script>
