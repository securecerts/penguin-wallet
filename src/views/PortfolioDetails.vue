<template>
  <div id="appCapsule">
    <!-- * Ads -->
    <carousel :items-to-show="0.98" :autoplay="3000" :wrap-around="true">
      <slide v-for="slide in slideLink" :key="slide">
        <img class="carousel__item" :src="slide" alt="ads" />
      </slide>
    </carousel>
    <!-- * Ads -->
    <!-- Portfolio -->
    <div class="section mt-4">
      <div class="section-heading">
        <h2 class="title">My Portfolio</h2>
      </div>
      <div class="card">
        <ul
          class="listview flush transparent no-line image-listview detailed-list mt-1 mb-1"
        >
          <!-- item -->
          <li v-for="asset in addressAssetDetails" :key="asset.assetId">
            <div class="item">
              <div class="icon-box text-success">
                <img
                  :src="`https://asa-list.tinyman.org/assets/${asset.assetId}/icon.png`"
                  width="22"
                  @error="$event.target.src = 'https://notiboy.com/default.png'"
                  alt=""
                />
              </div>
              <div class="in">
                <div class="text-center">
                  <strong>{{ asset.assetName }}</strong>
                </div>
                <div>
                  <strong>{{
                    asset.assetBalance / Math.pow(10, asset.decimals)
                  }}</strong>
                </div>
              </div>
            </div>
          </li>
          <!-- * item -->
        </ul>
      </div>
    </div>
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
    ...mapGetters(["addressAssetDetails", "selectedIndex"]),
  },
  beforeMount() {
    store.dispatch("getAddressData", this.selectedIndex);
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
