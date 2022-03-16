<template>
  <div class="home">
    <h1>Lista de Vinhos</h1>
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
