<template>
  <v-app>
    <v-main>
      <HeaderVue />
      <router-view />
    </v-main>
    <FooterVue />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import FooterVue from "./components/Footer.vue";
import HeaderVue from "./components/Header.vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
  components: {
    HeaderVue,
    FooterVue,
  },
});
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

</style>
