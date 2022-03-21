<template>
  <div class="home">
    <h1>Vinhos em oferta:</h1>
    <hr>
    <br>
    <HomeVue/>
  </div>
</template>

<script>
import HomeVue from '@/components/Home.vue';

export default {
  name: "HomeView",
    components: {
    HomeVue
  },
}

</script>

<style scoped>
h1 {
  padding-left: 10px;
}
</style>
