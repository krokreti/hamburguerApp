<template>
  <div class="home">
    <Banner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '../components/Banner.vue';
import Cardapio from '../components/Cardapio.vue';

@Component({
  components: {
    Cardapio,
    Banner
  },
})
export default class HomeView extends Vue {}
</script>
