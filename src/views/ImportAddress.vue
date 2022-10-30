<template>
  <div id="appCapsule">
    <h3 class="text-center mt-2 mb-2">Import Address</h3>
    <p class="px-4 justfy-text">
      You will enter your 25-word recovery passphrase to recover an algorand
      account.
    </p>
  </div>
  <div class="section">
    <div class="card special-margin">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="text-center">
              <th scope="col">Sl.No</th>
              <th scope="col">Passphrase</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <th class="number-size">1</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic1"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">2</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic2"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th>3</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic3"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">4</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic4"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">5</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic5"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">6</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic6"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">7</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic7"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">8</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic8"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">9</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic9"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">10</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic10"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">11</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic11"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">12</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic12"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">13</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic13"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">14</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic14"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">15</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic15"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">16</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic16"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">17</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic17"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">18</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic18"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">19</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic19"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">20</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic20"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">21</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic21"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">22</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic22"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">23</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic23"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">24</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic24"
                  />
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <th scope="row">25</th>
              <td>
                <div class="form-group basic">
                  <input
                    type="text"
                    class="form-control text-center-special"
                    v-model="enteredMnemonic25"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="transparent special-margin-lg">
      <button
        @click.prevent="checkMnemonic"
        class="btn btn-primary btn-block btn-lg"
      >
        Verify
      </button>
    </div>
  </div>
</template>
<script>
import router from "../router";
import store from "../store";
import algosdk from "algosdk";
export default {
  data() {
    return {
      enteredMnemonic1: "",
      enteredMnemonic2: "",
      enteredMnemonic3: "",
      enteredMnemonic4: "",
      enteredMnemonic5: "",
      enteredMnemonic6: "",
      enteredMnemonic7: "",
      enteredMnemonic8: "",
      enteredMnemonic9: "",
      enteredMnemonic10: "",
      enteredMnemonic11: "",
      enteredMnemonic12: "",
      enteredMnemonic13: "",
      enteredMnemonic14: "",
      enteredMnemonic15: "",
      enteredMnemonic16: "",
      enteredMnemonic17: "",
      enteredMnemonic18: "",
      enteredMnemonic19: "",
      enteredMnemonic20: "",
      enteredMnemonic21: "",
      enteredMnemonic22: "",
      enteredMnemonic23: "",
      enteredMnemonic24: "",
      enteredMnemonic25: "",
    };
  },
  methods: {
    checkMnemonic() {
      const mnemonic = this.enteredMnemonic1.concat(
        " ",
        this.enteredMnemonic2,
        " ",
        this.enteredMnemonic3,
        " ",
        this.enteredMnemonic4,
        " ",
        this.enteredMnemonic5,
        " ",
        this.enteredMnemonic6,
        " ",
        this.enteredMnemonic7,
        " ",
        this.enteredMnemonic8,
        " ",
        this.enteredMnemonic9,
        " ",
        this.enteredMnemonic10,
        " ",
        this.enteredMnemonic11,
        " ",
        this.enteredMnemonic12,
        " ",
        this.enteredMnemonic13,
        " ",
        this.enteredMnemonic14,
        " ",
        this.enteredMnemonic15,
        " ",
        this.enteredMnemonic16,
        " ",
        this.enteredMnemonic17,
        " ",
        this.enteredMnemonic18,
        " ",
        this.enteredMnemonic19,
        " ",
        this.enteredMnemonic20,
        " ",
        this.enteredMnemonic21,
        " ",
        this.enteredMnemonic22,
        " ",
        this.enteredMnemonic23,
        " ",
        this.enteredMnemonic24,
        " ",
        this.enteredMnemonic25
      );
      const mnemonicObject = algosdk.mnemonicToSecretKey(mnemonic);
      store.dispatch("generateAccount", mnemonicObject);
      const operation = "walletGeneration"
      store.commit("updateOperation",operation)
      router.push({ name: "inputPassword"});
    },
  },
};
</script>
<style scoped>
.justfy-text {
  text-align: justify;
}
.special-margin {
  margin-bottom: 40px;
}
.special-margin-lg {
  margin-bottom: 80px;
}
.text-center-special {
  text-align: center !important;
  color: #958d9e !important;
}
.number-size {
  font-size: 15px;
}
.special_bginput {
  background-color: black !important;
}
</style>
