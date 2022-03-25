<template>
<div>
  <div class="text-h2 mt-5" >Lista de Vinhos</div>
  <v-spacer></v-spacer>
  <dashboard-vue/>
  </div>
</template>

<script lang="ts">
import DashboardVue from "@/components/Dashboard.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {
    DashboardVue,
  },
});
</script>
