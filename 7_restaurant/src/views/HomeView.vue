<template>
  <div class="home">
    <HelloWorldVue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorldVue from '../components/HelloWorld.vue';
import HomeVue from '../components/Home.vue';

@Component({
  components: {
    HomeVue
  },
})
export default class HomeView extends Vue {}
</script>
