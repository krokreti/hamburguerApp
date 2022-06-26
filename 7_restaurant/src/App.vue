<template>
  <div id="app">
    <NavBarVue/>
    <router-view/>
    <FooterBarVue/>
  </div>
</template>

<script>
import FooterBarVue from './components/FooterBar.vue'
import NavBarVue from './components/NavBar.vue'

export default {
  
  data() {
    return {
      
    }
  },
  components: {
    NavBarVue ,
    FooterBarVue
  }
}
</script>
<style>
</style>
