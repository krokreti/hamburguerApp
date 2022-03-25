<template>
  <div>
    <v-toolbar
      dark
      fade-img-on-scroll
      color="#6A76AB"
      prominent
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
    >
          <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Shop</v-toolbar-title>

      <v-spacer></v-spacer>

      <!--v-btn icon>
        <v-icon>mdi-export</v-icon>
      </!--v-btn-->


        <template v-slot:extension>
            <v-btn text :to="{ name: 'home'}"> Início</v-btn>
            <!--v-btn text ><v-icon>mdi-cart-outline</v-icon></!--v-btn-->
            <carrinho-compras-vue/>
            <v-btn text>Sobre</v-btn>
        </template>

    </v-toolbar>
  </div>
</template>

<script>
import CarrinhoComprasVue from './CarrinhoCompras.vue'

export default {
    name:'Navbar',
    drawer : null,
    components: {
      CarrinhoComprasVue
    }
} 
</script>