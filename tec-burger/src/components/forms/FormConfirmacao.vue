<template>
  <v-container class="d-flex justify-center">
    
    <div class=" bg-form" style="border:1px solid blue">
    {{ this.$store.getters.total }}

    <div v-for="item in hamburgueres" :key="item.id" class="imgCinza">
        <CartItem :imagem="item.image" :nome="item.title" :quantidade="item.quantity" :id="item.id" :price="item.price"/>
    </div> 

    </div>
  </v-container>
</template>

<script>
import CartItem from '../carrinho/CartItem.vue';


export default {
    name: 'FormConfirmacao',
    data() {
        return {
        hamburgueres: null,    
        }
    },
    components: {
        CartItem,

    },
    created() {
        this.hamburgueres = this.$store.getters.carts;
    },
}
</script>

<style>
.bg-form {
    width: 30em;
    height: 100em;
    color: white;
}

.imgCinza {
    filter: none;
    -webkit-filter: grayscale(0);
    -webkit-transition: all 0.8s linear;
    -moz-transition: all 0.8s linear;
    transition: all 0.8s linear;
}

</style>