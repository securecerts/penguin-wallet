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
          <li>
            <a href="#" class="item">
              <div class="in">
                <div>
                  <strong @click.prevent="getTransactions"
                    >AlgoLeagues Coin</strong
                  >
                  <div class="text-small text-secondary">
                    Receive (ADJ...CMP)
                  </div>
                </div>
                <div class="text-end">
                  <strong>855,24</strong>
                  <div class="text-small">18 MAR 2022 11:38</div>
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
    ...mapGetters(["currentAddress"]),
  },
  methods: {
    getTransactions() {
      store.dispatch("getTransactionDetails");
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
