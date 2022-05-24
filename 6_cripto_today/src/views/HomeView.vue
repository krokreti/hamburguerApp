<template>
  <HomeCriptoVue />
</template>

<script lang="ts">
import Vue from "vue";
import HomeCriptoVue from "../components/HomeCripto.vue";

export default Vue.extend({
  name: "Home",

  components: {
    HomeCriptoVue,
  },
});
</script>
