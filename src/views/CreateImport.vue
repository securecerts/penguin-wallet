<template>
  <div id="appCapsule">
    <div class="listview-title mt-1">Create/Import Algorand Address</div>
    <ul class="listview image-listview text inset">
      <li>
        <router-link :to="{ name: 'createAddress' }" class="item">
          <div class="in">
            <div>Create Address</div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'importAddress' }" class="item">
          <div class="in">
            <div>Import Address</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- * App Capsule -->
</template>
