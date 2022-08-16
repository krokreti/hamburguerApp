<template>
  <v-app id="vApp">
    <div >
    <AppbarVue/>
    <router-view></router-view>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppbarVue from './components/layouts/Appbar.vue';
export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    AppbarVue,
  }
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#vApp {
    background-image: url('../public/burger.jpg');
    background-position: 0 -190px;
    background-attachment: fixed;
    background-size: cover;
}

@media (max-width: 600px) {
      #vApp {
        background-image: url('../public/burger.jpg');
        background-position: -550px -0px;
        background-size: cover;
      }
}
</style>
