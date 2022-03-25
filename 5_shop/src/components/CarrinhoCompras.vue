<template>
  <div>

    <v-btn
          dark
          outlined
          text
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      app
      
      right
      absolute
      temporary
      width="500"
    >
      <v-list-item>
        <v-list-item-avatar>
         <v-icon>mdi-cart-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Carrinho de Compras</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

     
    </v-navigation-drawer>


  </div>
</template>

<script>
export default {
  name: "CarrinhoCompras",
  data() {
    return {
      drawer: null,
      dialog: false,
    };
  },

};
</script>

<style scoped>

</style>