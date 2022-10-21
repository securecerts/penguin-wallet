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
              checked
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
<style scoped>
.spacial-margin {
  margin-top: 100px;
}
</style>
