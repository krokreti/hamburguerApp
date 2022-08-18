<template>
    <v-container >
        <v-row class="d-flex justify-start align-center"  >
            <v-col cols="12" sm="2" md="3"  style="height:7em;">
                <v-row dense class="img-box1" >
                    <img :src="require(`@/assets/hamburgueres/${imagem}`)" alt="produto" class="cartao1"/>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" md="9" class="pr-5 d-flex align-center" style="height: 7em;">
                <v-row dense class="d-flex align-center justify-space-between ml-5 pl-2" style="height:1.5em;">
                    <p class="font-weight-bold yellow--text text--darken-3" > {{ nome }} </p>
                    <p class="font-weight-bold yellow--text text--darken-3" > {{ quantidade }} </p>
                </v-row>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        quantidade: null,
        nome: null,
        imagem: null,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
.cartao1 {
    width: 80%;
    height: 80%;
    border: 1px solid grey;
    border-radius: 20px
}

.img-box1{
    width: 7em;
    height: 7em;
    margin: 0 auto;
    filter: drop-shadow(0 0 1px #333);
}
</style>