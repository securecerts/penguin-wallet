<template>
  <div id="appCapsule">
    <!-- Main Events -->
    <div class="section full gradientSection">
      <div class="in">
        <h5 class="title mb-2">Current Balance</h5>
        <h1 class="total">
          <img
            src="../assets/icons/algorand-algo-white.svg"
            width="22"
            alt=""
          />
          2,562.50
        </h1>
        <div class="wallet-inline-button mt-5">
          <a
            href="#"
            class="item"
            data-bs-toggle="modal"
            data-bs-target="#depositActionSheet"
          >
            <div class="iconbox">
              <img
                src="../assets/icons/arrow-up-outline.svg"
                width="22"
                alt=""
              />
            </div>
            <strong>Send</strong>
          </a>
          <a
            href="#"
            class="item"
            data-bs-toggle="modal"
            data-bs-target="#withdrawActionSheet"
          >
            <div class="iconbox">
              <img
                src="../assets/icons/arrow-down-outline.svg"
                width="22"
                alt=""
              />
            </div>
            <strong>Receive</strong>
          </a>
          <a
            href="#"
            class="item"
            data-bs-toggle="modal"
            data-bs-target="#sendActionSheet"
          >
            <div class="iconbox">
              <img src="../assets/icons/add-outline.svg" width="22" alt="" />
            </div>
            <strong>Add Asset</strong>
          </a>
          <a href="crypto-exchange.html" class="item">
            <div class="iconbox">
              <img
                src="../assets/icons/repeat-outline.svg"
                width="22"
                alt="Asset Swap"
              />
            </div>
            <strong>Swap</strong>
          </a>
        </div>
      </div>
    </div>
    <!-- * Main Events -->
    <!-- * Ads -->
    <carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
      <slide v-for="slide in slideLink" :key="slide">
        <img class="carousel__item" :src="slide" alt="asa icon" />
      </slide>
    </carousel>
    <!-- * Ads -->
    <div class="card card-with-icon m-3">
      <div class="card-body pt-3 pb-3 text-center">
        <div class="card-icon bg-primary mb-2">
          <router-link :to="{ name: 'createImport' }">
            <div class="iconbox" role="button">
              <img src="../assets/icons/add-outline.svg" width="30" alt="" />
            </div>
          </router-link>
        </div>
        <h3 class="card-titlde mb-1">Create/Import Address</h3>
      </div>
    </div>
    <!-- Wallets -->
    <div class="section mt-4 mb-4">
      <div class="section-heading">
        <h2 class="title">Wallets</h2>
      </div>
      <div class="transactions">
        <!-- item -->
        <a href="app-transaction-detail.html" class="item-selected">
          <div class="detail">
            <img
              src="../assets/icons/wallet-outline.svg"
              alt="img"
              class="image-block imaged w32"
            />
            <div>
              <strong>Wallet 1</strong>
              <p>ADJ...B6A</p>
            </div>
          </div>
          <div class="right">
            <div class="price">
              <img
                src="../assets/icons/algorand-algo-white.svg"
                width="10"
                alt=""
              />
              150000
            </div>
          </div>
        </a>
        <!-- * item -->
        <!-- item -->
        <a href="app-transaction-detail.html" class="item">
          <div class="detail">
            <img
              src="../assets/icons/wallet-outline.svg"
              alt="img"
              class="image-block imaged w32"
            />
            <div>
              <strong>Wallet 2</strong>
              <p>P736...8B4R</p>
            </div>
          </div>
          <div class="right">
            <div class="price">- $ 29</div>
          </div>
        </a>
        <!-- * item -->
      </div>
    </div>
    <!-- * Wallets -->
    <!-- Deposit Action Sheet -->
    <div
      class="modal fade action-sheet"
      id="depositActionSheet"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Send Asset</h5>
          </div>
          <div class="modal-body">
            <div class="action-sheet-content">
              <form>
                <div class="form-group basic mb-2">
                  <div class="input-wrapper">
                    <input
                      type="address"
                      class="form-control"
                      id="senderAddress"
                      placeholder="Enter address"
                    />
                  </div>
                </div>

                <div class="form-group basic">
                  <div class="input-wrapper">
                    <label class="label" for="depositAmount"
                      >Enter Amount</label
                    >
                    <div class="exchange-group small">
                      <div class="input-col">
                        <input
                          type="text"
                          class="form-control form-control-lg pe-0"
                          id="depositAmount"
                          placeholder="0"
                          value="380"
                          maxlength="14"
                        />
                      </div>
                      <div class="select-col">
                        <select class="form-select form-select-lg currency">
                          <option value="USD" selected>USDC</option>
                          <option value="Algo">Algo</option>
                          <option value="EUR">Yieledly</option>
                          <option value="AUD">Headline</option>
                          <option value="CAD">Crescendo</option>
                        </select>
                      </div>
                    </div>
                    <div class="input-wrapper mt-4">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>
                </div>

                <div class="mt-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                    data-bs-dismiss="modal"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- * Deposit Action Sheet-->

    <!-- Withdraw Action Sheet -->
    <div
      class="modal fade action-sheet"
      id="withdrawActionSheet"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Deposit Address</h5>
          </div>
          <div class="modal-body">
            <div class="action-sheet-content">
              <form class="special-align">
                <qrcode-vue :value="value" :size="200" level="Q" />
                <div class="form-group basic mb-2">
                  <div class="input-wrapper">
                    <label class="label" for="receiveAddress">Address</label>
                    <div>
                      AD5J43O3N6UPEUF...Y2EAEZJVLRCINWYBI
                      <span
                        ><img
                          src="../assets/icons/copy-outline.svg"
                          width="18"
                          alt=""
                      /></span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- * Withdraw Action Sheet-->

    <!-- Send Action Sheet -->
    <div
      class="modal fade action-sheet"
      id="sendActionSheet"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Asset</h5>
          </div>
          <div class="modal-body">
            <div class="action-sheet-content">
              <form>
                <div class="form-group basic mb-2">
                  <div class="input-wrapper">
                    <label class="label" for="walletaddress">Asset Id</label>
                    <input
                      type="email"
                      class="form-control"
                      id="walletaddress"
                      placeholder="Enter Asset Id"
                    />
                  </div>
                  <div class="input-wrapper mt-4">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div class="mt-2">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block"
                      data-bs-dismiss="modal"
                    >
                      Add Asset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- * Send Action Sheet-->
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import QrcodeVue from "qrcode.vue";
export default {
  data() {
    return {
      value: "https://ionic.io/ionicons",
      slideLink: [
        "https://notiboy.com/image1.png",
        "https://notiboy.com/image2.png",
        "https://notiboy.com/image3.png",
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    QrcodeVue,
  },
};
</script>

<style scoped>
.carousel__item {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.special-align {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}
</style>
