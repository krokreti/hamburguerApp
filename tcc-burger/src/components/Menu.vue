<template>
  <v-container class="menu-box d-flex justify-center" style="border: 1px solid blue;">
    <div class="menu-box-container">
        <HamburguerListVue/>
    </div>
  </v-container>
</template>

<script>
import HamburguerListVue from './layouts/HamburguerList.vue'

export default {
    name: 'Menu',
    data() {
        return {
            
        }
    },
    components: {
        HamburguerListVue,
    }
}
</script>

<style>
.menu-box {
    color: white;
}

.menu-box-container {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid grey;
    padding: 1em;
    width: fit-content;
    height: fit-content;
    margin: 1em;
}
</style>