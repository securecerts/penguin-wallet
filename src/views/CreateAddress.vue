<template>
  <div id="appCapsule">
    <h3 class="text-center mt-2 mb-2">
      Create a passphrase backup <br />for your account
    </h3>
    <p class="px-4 justfy-text">
      Creating a passphrase backup will allow you to recover your account.
      Without the passphrase, If you lose your device, remove the account or
      delete the app, you can permanently lose access to your Algorand account.
      So please write down the passphrase.
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
              <th>1</th>
              <td>John</td>
            </tr>
            <tr class="text-center">
              <th scope="row">2</th>
              <td>Mark</td>
            </tr>
            <tr class="text-center">
              <th>3</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">4</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">5</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">6</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">7</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">8</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">9</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">10</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">11</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">12</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">13</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">14</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">15</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">16</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">17</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">18</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">19</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">20</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">21</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">22</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">23</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">24</th>
              <td>Jane</td>
            </tr>
            <tr class="text-center">
              <th scope="row">25</th>
              <td>Jane</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="transparent special-margin-lg">
      <router-link :to="{ name: 'checkPassphrase' }">
        <button type="submit" class="btn btn-primary btn-block btn-lg">
          Next
        </button>
      </router-link>
    </div>
  </div>
</template>

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
</style>
