<template>
  <div class="appbar">
    <span style="font-weight: bold;">Hey, Davi 👋</span>
    <div class="appbar-img-profile">
      <img src="../../assets/unknown-profile.jpg" class="appbar-img-profile-class" alt="Profile-Picture">
    </div>
  </div>
</template>

<script lang="ts">
import User from '../models/User'

export default {
    data() {
        return {
            usuario: User,
        }
    },
    
}
</script>

<style>
.appbar {
    height: 6em;
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.appbar-img-profile {
  display: flex;
  justify-content: center;
  align-items: center;
}

.appbar-img-profile-class {
  display: inline-block;
  border-radius: 50%;
  height: 2.5em;
  width: 2.5em;
  object-fit: cover;
  border: 3px solid transparent;
}
</style>