<template>
  <div id="appCapsule">
    <!-- * Ads -->
    <carousel :items-to-show="0.98" :autoplay="3000" :wrap-around="true">
      <slide v-for="slide in slideLink" :key="slide">
        <img class="carousel__item" :src="slide" alt="asa icon" />
      </slide>
    </carousel>
    <!-- * Ads -->
    <!-- Transactions -->
    <div class="section mt-4 mb-4">
      <div class="section-heading">
        <h2 class="title">Transactions</h2>
      </div>
      <div class="card">
        <ul
          class="listview flush transparent no-line image-listview detailed-list mt-1 mb-1"
        >
          <!-- item -->
          <li v-for="transaction in transactionList" :key="transaction.assetId">
            <a href="#" class="item">
              <div class="in">
                <div>
                  <strong>{{ transaction.assetName }}</strong>
                  <div class="text-small text-secondary">
                    Receiver
                    <span>{{
                      `${transaction.receiver.substr(
                        0,
                        4
                      )}...${transaction.receiver.substr(54, 57)}`
                    }}</span>
                  </div>
                </div>
                <div class="text-end">
                  <strong>{{
                    transaction.amount / Math.pow(10, transaction.decimals)
                  }}</strong>
                  <div class="text-small">
                    {{ transactionTime(transaction.roundTime) }}
                  </div>
                </div>
              </div>
            </a>
          </li>
          <!-- * item -->
        </ul>
      </div>
    </div>
    <!-- Transactions -->
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import { mapGetters } from "vuex";
import store from "../store";
import date from "date-and-time";
export default {
  data() {
    return {
      slideLink: [
        "https://notiboy.com/image1.png",
        "https://notiboy.com/image2.png",
        "https://notiboy.com/image3.png",
      ],
    };
  },
  computed: {
    ...mapGetters(["currentAddress", "transactionList"]),
  },
  methods: {
    transactionTime(roundTime) {
      return date.format(new Date(roundTime * 1000), "DD/MM/YYYY HH:mm");
    },
  },
  mounted() {
    store.dispatch("getTransactionDetails");
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
