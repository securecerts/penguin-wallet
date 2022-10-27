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
          {{algoBalance}}
        </h1>
        <div class="wallet-inline-button mt-5">
          <a
            href="#"
            class="item"
            data-bs-toggle="modal"
            data-bs-target="#depositActionSheet"
            @click.prevent="getAssetsFromAddress"
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
        <h2 v-if="walletDetails.length > 0" class="title">Wallets</h2>
      </div>
      <div class="transactions">
        <!-- item -->
        <a
          v-for="(wallet, index) in walletDetails"
          :key="index"
          @click.prevent="walletSelected(index)"
          class="pointer"
          :class="selectedIndex == index ? 'item-selected' : 'item'"
        >
          <div class="detail">
            <img
              src="../assets/icons/wallet-outline.svg"
              alt="img"
              class="image-block imaged w32"
            />
            <div>
              <strong>{{ wallet.accountName }}</strong>
              <p></p>
            </div>
          </div>
          <div class="right">
            <div class="price">
              {{
                `${wallet.accountDetails.addr.substr(
                  0,
                  4
                )}...${wallet.accountDetails.addr.substr(54, 57)}`
              }}
            </div>
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
                    <label class="label" for="address">Address</label>
                    <input
                      type="address"
                      class="form-control"
                      id="senderAddress"
                      placeholder="Enter address"
                      v-model="receiverAddress"
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
                          maxlength="14"
                          v-model="sendAmount"
                        />
                      </div>
                      <div class="select-col">
                        <select v-model="assetId" class="form-select form-select-sm currency">
                          <!-- <option disabled value="">Select an Asset</option> -->
                          <option v-for="asset in addressAssetDetails" :key="asset.assetId" :value="asset.assetId"
                          >{{asset.assetName.substr(0,20)}}</option> 
                        </select>
                      </div>
                    </div>
                    <div class="input-wrapper mt-4">
                      <label class="label" for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter Password"
                        v-model="password"
                      />
                    </div>
                  </div>
                </div>

                <div class="mt-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                    data-bs-dismiss="modal"
                    @click.prevent="sendAsset"
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
                    <label class="label" for="password">Password</label>
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
import store from "../store";
import { mapGetters } from "vuex";
import algosdk from "algosdk";
export default {
  data() {
    return {
      value: "https://ionic.io/ionicons",
      slideLink: [
        "https://notiboy.com/image1.png",
        "https://notiboy.com/image2.png",
        "https://notiboy.com/image3.png",
      ],
      password: "",
      walletDetails: [],
      selectedIndex: 0,
      sendAmount:0,
      receiverAddress:"",
      assetId:0,
      assetsDetails:[]
    };
  },
  computed: {
    ...mapGetters(["accountList", "accountsDetails","algoBalance","addressAssetDetails"]),
  },
  watch: {
    accountsDetails() {
      for (let i = 0; i < this.accountsDetails.length; i++) {
        let accountDetails = algosdk.mnemonicToSecretKey(
          JSON.parse(this.accountsDetails[i].accountDetails)
        );
        this.walletDetails.push({
          accountName: this.accountsDetails[i].accountName,
          accountDetails: accountDetails,
        });
      }
    },
    //watch change in index to findout change in selection of wallet and then start pulling data
    selectedIndex(){
      this.getAddressData();
    }
  },
  methods: {
    walletSelected(index) {
      this.selectedIndex = index;
    },
    getAddressData(){
      store.dispatch("getAddressData", this.selectedIndex);
    },
    getAssetsFromAddress(){
      console.log(this.addressAssetDetails)
    },
    sendAsset(){
      store.dispatch("sendAsset",{
        receiverAddress:this.receiverAddress,
        amount:this.amount,
        assetId:this.assetId,
        password:this.password,
        operation:"send"
      })
    }
  },
  created() {
    const addressList = JSON.parse(localStorage.getItem("addressList"));
    store.commit("updateAccountList", addressList);
  },
  mounted(){
    this.getAddressData()
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
.pointer {
  cursor: pointer;
}
</style>
