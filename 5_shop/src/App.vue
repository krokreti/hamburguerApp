<template>
  <v-app>

    <v-main>
          <NavbarVue/>          
        <v-container fluid id="box">

        <router-view />
        </v-container>
      
    </v-main>

    <FooterVue/>

  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import FooterVue from "./components/Footer.vue";
import NavbarVue from "./components/Navbar.vue";


export default Vue.extend({
  name: "App",
  components: {
    NavbarVue,
    FooterVue,
  },

  data: () => ({
    //
  }),
});
</script>

<style scoped>
* {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#box {
  align-content: center;
  align-items: center;
  text-align: center;
}
</style>
