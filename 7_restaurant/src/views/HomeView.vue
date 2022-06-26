<template>
  <div class="home">
    <HomeVue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeVue from '../components/Home.vue';

@Component({
  components: {
    HomeVue
  },
})
export default class HomeView extends Vue {}
</script>
