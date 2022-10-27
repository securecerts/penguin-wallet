<template>
  <div class="section spacial-margin">
    <div class="section-title">Select the Node</div>
    <div class="card">
      <div class="card-body p-0">
        <div class="input-list">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioList2"
              id="radioList1b"
              @click="activateMainnet"
              :checked="isMainnet"
            />
            <label class="form-check-label" for="radioList1b"
              >Algorand Mainnet</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioList2"
              id="radioList2b"
              @click="activateTestnet"
              :checked="isTestnet"
            />
            <label class="form-check-label" for="radioList2b"
              >Algorand Testnet</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  data(){
    return{
      node:"",
      isTestnet:Boolean,
      isMainnet:Boolean,
    }
  },
  methods:{
    activateMainnet(){
      localStorage.setItem("node", "mainnet");
      store.dispatch("getNode");
    },
    activateTestnet(){
      localStorage.setItem("node", "testnet");
      store.dispatch("getNode");
    }
  },
  mounted(){
    const currentNode = localStorage.getItem("node")
    if(currentNode == "mainnet"){
      this.node == "mainnet";
      this.isTestnet = false;
      this.isMainnet = true;
    }else{
      this.node == "testnet";
      this.isTestnet = true;
      this.isMainnet = false;
    }
  }
}
</script>
<style scoped>
.spacial-margin {
  margin-top: 100px;
}
</style>
