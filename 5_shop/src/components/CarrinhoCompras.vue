<template>
  <div>
    <v-btn dark outlined text @click="abrirCarrinho()">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
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

      <v-spacer></v-spacer>
      <br />

      <v-list dense>
        <v-list-item>
          <v-card id="drop" class="mx-auto" max-width="500">
            <v-row>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                width="100px"
              ></v-img>
              <v-sheet class="pa-12" color="black lighten-1">
                <v-row> Nome </v-row>
                <v-row> Quantidade </v-row>
              </v-sheet>
              <v-sheet class="pa-12" color="black lighten-1"> Preço </v-sheet>
            </v-row>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "CarrinhoCompras",
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    abrirCarrinho() {
      this.drawer = !this.drawer
    }
  },
};
</script>

<style scoped>
#drop {
  filter: drop-shadow(0 0 3px #000);
}
</style>