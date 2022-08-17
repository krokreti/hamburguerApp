<template>
  <v-container class="container-hamburguer rounded-xl " @click="verDetalhes" >
    <v-row  class="d-flex justify-start">

    <v-col cols="12" sm="2" md="3" >
        <v-row dense class="img-box">
            <img src="../../../public/hamburgueres/hamburguer2.png" alt="produto" class="cartao"/>
        </v-row>
    </v-col>
    <v-col cols="12" sm="4" md="9" >
        <v-row dense class="d-flex justify-space-between px-3 pt-1">
            <p class="font-weight-bold yellow--text text--darken-3" > X-Picanha </p>
            
            
            <p class="font-weight-bold green--text text--lighten-2">Preço</p>
        </v-row>
        <v-row dense>
            <p class="font-weight-light">Hamburguer com carne de picanha, cebola, tomate, molho billyjack</p>
        </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from '@/router'

export default {
    methods: {
        verDetalhes() {
            router.push({ name: 'hamburguer-detalhado', params: { id: `1` } })      
            
        }   
    }
}
</script>

<style>
.container-hamburguer{
    color: black;
    background-color: white;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    transition: .5s;
    user-select: none;
    border:1px solid #677381
}

.container-hamburguer:hover {
    background-color: #677381;
    color: white;
    cursor: pointer;
}

.cartao {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}

.img-box{
    width: 7em;
    height: 7em;
    margin: 0 auto;
    filter: drop-shadow(0 0 1px #333);
}
</style>