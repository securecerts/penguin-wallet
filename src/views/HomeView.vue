<template>
  <div id="appCapsule"> 
        <!-- Main Events -->
        <div class="section full gradientSection">
            <div class="in">
                <h5 class="title mb-2">Current Balance</h5>
                <h1 class="total"><img src="../assets/icons/algorand-algo-white.svg" width="22" alt=""> 2,562.50</h1>
                <div class="wallet-inline-button mt-5">
                    <a href="#" class="item" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                        <div class="iconbox">
                            <img src="../assets/icons/arrow-up-outline.svg" width="22" alt="">
                        </div>
                        <strong>Send</strong>
                    </a>
                    <a href="#" class="item" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                        <div class="iconbox">
                            <img src="../assets/icons/arrow-down-outline.svg" width="22" alt="">
                        </div>
                        <strong>Receive</strong>
                    </a>
                    <a href="#" class="item" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                        <div class="iconbox">
                            <img src="../assets/icons/add-outline.svg" width="22" alt="">
                        </div>
                        <strong>Add Asset</strong>
                    </a>
                    <a href="crypto-exchange.html" class="item">
                        <div class="iconbox">
                            <img src="../assets/icons/repeat-outline.svg" width="22" alt="Asset Swap">
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
                <img class="carousel__item" :src="slide"  alt="asa icon">
            </slide>       
        </carousel>
        <!-- * Ads -->
        <!-- Wallets -->
        <div class="section mt-4 mb-4">
            <div class="section-heading">
                <h2 class="title">Wallets</h2>
            </div>
            <div class="transactions">
                <!-- item -->
                <a href="app-transaction-detail.html" class="item-selected">
                    <div class="detail">
                        <img src="../assets/icons/wallet-outline.svg" alt="img" class="image-block imaged w32">
                        <div>
                            <strong>Wallet 1</strong>
                            <p>ADJ...B6A</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="price"> <img src="../assets/icons/algorand-algo-white.svg" width="10" alt=""> 150000</div>
                    </div>
                </a>
                <!-- * item -->
                <!-- item -->
                <a href="app-transaction-detail.html" class="item">
                    <div class="detail">
                        <img src="../assets/icons/wallet-outline.svg" alt="img" class="image-block imaged w32">
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
        <div class="modal fade action-sheet" id="depositActionSheet" tabindex="-1" role="dialog">
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
                                        <label class="label" for="account2">Select Account</label>
                                        <select class="form-control custom-select" id="account2">
                                            <option value="0">Savings (*** 5019)</option>
                                            <option value="1">Investment (*** 6212)</option>
                                            <option value="2">Mortgage (*** 5021)</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="depositAmount">Enter Amount</label>
                                        <div class="exchange-group small">
                                            <div class="input-col">
                                                <input type="text" class="form-control form-control-lg pe-0"
                                                    id="depositAmount" placeholder="0" value="380" maxlength="14">
                                            </div>
                                            <div class="select-col">
                                                <select class="form-select form-select-lg currency">
                                                    <option value="USD" selected>USD</option>
                                                    <option value="EUR">EUR</option>
                                                    <option value="AUD">AUD</option>
                                                    <option value="CAD">CAD</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-2">
                                    <button type="button" class="btn btn-primary btn-lg btn-block"
                                        data-bs-dismiss="modal">Send</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Deposit Action Sheet-->

        <!-- Withdraw Action Sheet -->
        <div class="modal fade action-sheet" id="withdrawActionSheet" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Receive Asset</h5>
                    </div>
                    <div class="modal-body">
                        <div class="action-sheet-content">
                            <form>
                                <div class="form-group basic mb-2">
                                    <div class="input-wrapper">
                                        <label class="label" for="account3">Select Account</label>
                                        <select class="form-control custom-select" id="account3">
                                            <option value="0">Savings (*** 5019)</option>
                                            <option value="1">Investment (*** 6212)</option>
                                            <option value="2">Mortgage (*** 5021)</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group basic mb-2">
                                    <div class="input-wrapper">
                                        <label class="label" for="iban1">IBAN</label>
                                        <input type="email" class="form-control" id="iban1"
                                            placeholder="Enter your IBAN">
                                        <i class="clear-input">
                                            <ion-icon name="close-circle"></ion-icon>
                                        </i>
                                    </div>
                                </div>

                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="withdrawAmount">Enter Amount</label>
                                        <div class="exchange-group small">
                                            <div class="input-col">
                                                <input type="text" class="form-control form-control-lg pe-0"
                                                    id="withdrawAmount" placeholder="0" value="380" maxlength="14">
                                            </div>
                                            <div class="select-col">
                                                <select class="form-select form-select-lg currency">
                                                    <option value="USD" selected>USD</option>
                                                    <option value="EUR">EUR</option>
                                                    <option value="AUD">AUD</option>
                                                    <option value="CAD">CAD</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-2">
                                    <button type="button" class="btn btn-primary btn-lg btn-block"
                                        data-bs-dismiss="modal">Receive</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Withdraw Action Sheet-->

        <!-- Send Action Sheet -->
        <div class="modal fade action-sheet" id="sendActionSheet" tabindex="-1" role="dialog">
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
                                        <label class="label" for="walletaddress">Wallet Address</label>
                                        <input type="email" class="form-control" id="walletaddress"
                                            placeholder="Enter a wallet address">
                                        <i class="clear-input">
                                            <ion-icon name="close-circle"></ion-icon>
                                        </i>
                                    </div>
                                </div>

                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="sendAmount">Enter Amount</label>
                                        <div class="exchange-group small">
                                            <div class="input-col">
                                                <input type="text" class="form-control form-control-lg pe-0"
                                                    id="sendAmount" placeholder="0" value="380" maxlength="14">
                                            </div>
                                            <div class="select-col">
                                                <select class="form-select form-select-lg currency">
                                                    <option value="BTC" selected>BTC</option>
                                                    <option value="ETH">ETH</option>
                                                    <option value="ADA">ADA</option>
                                                    <option value="USDT">USDT</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-2">
                                    <button type="button" class="btn btn-primary btn-lg btn-block"
                                        data-bs-dismiss="modal">Add Asset</button>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide} from 'vue3-carousel'
export default {
    data(){
        return{
            slideLink:["https://notiboy.com/image1.png","https://notiboy.com/image2.png","https://notiboy.com/image3.png"]
        }
    },
  components: {
    Carousel,
    Slide
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

</style>
