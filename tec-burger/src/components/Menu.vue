<template>
  <v-container class="menu-box d-flex justify-center" >
    <div class="menu-box-container">
        <p class="text-h5 text-center">Burgers</p>
        <HamburguerListVue/>
        <v-divider dark class="mb-5"></v-divider>
        <p class="text-h5 text-center">Batatas</p>
        <BatataListVue/>
        <v-divider dark class="mb-5"></v-divider>
        <p class="text-h5 text-center">Bebidas</p>
    </div>
  </v-container>
</template>

<script>
import BatataListVue from './layouts/BatataList.vue'
import HamburguerListVue from './layouts/HamburguerList.vue'

export default {
    name: 'Menu',
    data() {
        return {
            
        }
    },
    components: {
        HamburguerListVue,
        BatataListVue,
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