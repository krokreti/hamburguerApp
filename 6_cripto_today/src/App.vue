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
