<template>
  <div id="appCapsule">
    <div class="listview-title mt-1">Profile Settings</div>
    <ul class="listview image-listview text inset">
      <li>
        <router-link :to="{ name: 'updatePassword' }" class="item">
          <div class="in">
            <div>Change Password</div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'nodes' }" class="item">
          <div class="in">
            <div>Nodes</div>
          </div>
        </router-link>
      </li>
      <!-- <li>
        <a href="#" class="item">
          <div class="in">
            <div>Delete Address</div>
          </div>
        </a>
      </li> -->
    </ul>

    <div class="listview-title mt-1">Support</div>
    <ul class="listview image-listview text mb-2 inset">
      <li>
        <router-link :to="{ name: 'terms' }" class="item">
          <div class="in">
            <div>Terms & Services</div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'privacy' }" class="item">
          <div class="in">
            <div>Privacy Policy</div>
          </div>
        </router-link>
      </li>
      <li>
        <div class="item">
          <div class="in">
            <div>Penguin Wallet v0.0.1</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- * App Capsule -->
</template>
