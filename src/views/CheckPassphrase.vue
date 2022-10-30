<template>
  <div id="appCapsule">
    <h3 class="text-center mt-2 mb-2">Verify Recovery Passphrase</h3>
    <p class="px-4 justfy-text">
      Fill the passphrase from the written down list. This is to ensure that you
      have taken the backup of passphrases in correct order.
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
                    v-model="enteredMnemonic[0]"
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
                    v-model="enteredMnemonic[1]"
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
                    v-model="enteredMnemonic[2]"
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
                    v-model="enteredMnemonic[3]"
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
                    v-model="enteredMnemonic[4]"
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
                    v-model="enteredMnemonic[5]"
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
                    v-model="enteredMnemonic[6]"
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
                    v-model="enteredMnemonic[7]"
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
                    v-model="enteredMnemonic[8]"
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
                    v-model="enteredMnemonic[9]"
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
                    v-model="enteredMnemonic[10]"
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
                    v-model="enteredMnemonic[11]"
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
                    v-model="enteredMnemonic[12]"
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
                    v-model="enteredMnemonic[13]"
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
                    v-model="enteredMnemonic[14]"
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
                    v-model="enteredMnemonic[15]"
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
                    v-model="enteredMnemonic[16]"
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
                    v-model="enteredMnemonic[17]"
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
                    v-model="enteredMnemonic[18]"
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
                    v-model="enteredMnemonic[19]"
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
                    v-model="enteredMnemonic[20]"
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
                    v-model="enteredMnemonic[21]"
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
                    v-model="enteredMnemonic[22]"
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
                    v-model="enteredMnemonic[23]"
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
                    v-model="enteredMnemonic[24]"
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
import { mapGetters } from "vuex";
import store from "../store";
import router from "../router";
export default {
  data() {
    return {
      enteredMnemonic: [],
    };
  },
  computed: {
    ...mapGetters(["mnemonic"]),
  },
  methods: {
    checkMnemonic() {
      if (this.enteredMnemonic.length == 25) {
        for (let i = 0; i < this.enteredMnemonic.length; i++) {
          if (this.enteredMnemonic[i] === this.mnemonic[i]) {
            continue;
          } else {
            console.log("Not matched");
            return;
          }
        }
        const operation = "walletGeneration"
        store.commit("updateOperation",operation)
        router.push({ name: "inputPassword"});
      }
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
