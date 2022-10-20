<template>
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <h1>Password</h1>
      <h4>Create/Update Password</h4>
    </div>
    <div class="section mb-5 p-2">
      <form action="index.html">
        <div class="card">
          <div class="card-body">
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  autocomplete="off"
                  placeholder="Your password"
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>

            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password2">Password Again</label>
                <input
                  type="password"
                  class="form-control"
                  id="password2"
                  autocomplete="off"
                  placeholder="Type password again"
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>

            <div class="custom-control custom-checkbox mt-2 mb-1">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckb1"
                />
                <label class="form-check-label" for="customCheckb1">
                  I agree
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#termsModal"
                    >terms and conditions</a
                  >
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="form-button-group transparent margin_special">
          <button type="submit" class="btn btn-primary btn-block btn-lg">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- * App Capsule -->
</template>
