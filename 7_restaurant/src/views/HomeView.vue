<template>
  <div class="home">
    <Banner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '../components/Banner.vue';
import HomeVue from '../components/Home.vue';

@Component({
  components: {
    HomeVue,
    Banner
  },
})
export default class HomeView extends Vue {}
</script>
