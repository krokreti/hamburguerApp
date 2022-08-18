<template>
  <v-row style="width:fit-content;">
    <v-dialog v-model="dialog" dark scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          :content="cartItemNumber"
          :value="cartItemNumber"
          color="green"
          overlap
        >
          <v-btn
            v-if="type == 'appbar'"
            color="warning"
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-btn
            color="warning"
            dark

            style="height: 4em"
            v-bind="attrs"
            v-on="on"
            v-if="type == 'botao'"
          >
            <v-icon left> mdi-cart-outline </v-icon>
            Ver Carrinho
          </v-btn>
        </v-badge>
      </template>
      <v-card>
        <v-card-title><v-icon>mdi-cart</v-icon> Carrinho</v-card-title>
        <v-divider></v-divider>

        <v-card-text style="height: 300px">
          <div v-for="item in cartItems" :key="item.id">
          <CartItem :imagem="item.image" :nome="item.title" :quantidade="item.quantity"/>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="green darken-1" outlined @click="dialog = false">
            Finalizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "Cart",
  props: {
    type: null,
  },
  components: {
    CartItem,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    cartItemNumber() {
      return this.$store.getters.cartItemNumber;
    },
    cartItems() {
      return this.$store.getters.carts;
    },
  },
};
</script>

<style>
</style>