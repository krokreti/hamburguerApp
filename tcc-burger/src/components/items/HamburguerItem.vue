<template>
  <v-container class="hamburguer-detalhado-container">
    <div class="btn-voltar">
      <router-link to="/menu">
      <v-btn class="mx-2" fab dark small color="warning" >
        <v-icon dark> mdi-menu-left </v-icon>
      </v-btn>
      </router-link>

      <span class="text-h6">Detalhes</span>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark> mdi-heart </v-icon>
      </v-btn>
    </div>

    <div class="hamburguer-img">
      <img src="../../../public/hamburgueres/hamburguer2.png" alt="produto" />
    </div>

    <div class="avaliacao">
      <v-icon color="warning">mdi-star</v-icon>
      4.8
    </div>

    <div class="hamburguer-container-name-value">
      <div class="hamburguer-name text-h4">X-Tec Monster</div>

      <div class="hamburguer-value" >
        <v-row class="d-flex justify-center">
          Quantidade:
        </v-row>
        <v-row>
          <v-col>
        <v-text-field dark readonly v-model="quantidade" rounded  style="width:10em;">
          <v-icon @click="quantidade++" slot="append" color="warning">
            mdi-plus
          </v-icon>
          <v-icon
            @click="quantidade--"
            :disabled="quantidade == 1"
            slot="prepend"
            color="red"
          >
            mdi-minus
          </v-icon>
        </v-text-field>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="pa-3">
      <span class="text-h5">Descrição</span>
      <p class=" font-weight-light">Duas carnes de Picanha, ovo, cheddar, pão de brioche e molho barbecue.</p>
    </div>

    <div class="mb-3 ">
      <div class="d-flex justify-center">
      <span class="text-sm-h5 text-md-h6 titulo-cart" > Deseja remover algum ingrediente? </span>
      </div>
      <v-row class="mt-3 d-flex justify-center" >
        <v-col cols="12" md="6" sm="12" >
          <v-textarea
            label="Digite os ingredientes que não deseja"
            dark
            auto-grow
            outlined
            rows="3"
            row-height="25"
            shaped
        ></v-textarea>
        </v-col>
      </v-row>
    </div>

    <div class="add-cart">
       <span class="green--text text--lighten-2"> R$ {{ valor * quantidade}} </span>
      <v-btn color="warning" dark class="px-5"  style="height: 4em" @click="adicionarCarrinho">
        <v-icon left>
         mdi-cart-outline
        </v-icon>
        Adicionar ao Carrinho
      </v-btn>
    </div>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      quantidade: 1,
      valor: 39.00,
    };
  },
  methods: {
    adicionarCarrinho() {

    }
  },
};
</script>

<style>
a {
    text-decoration: none;
}

.hamburguer-detalhado-container {
  margin: 1em auto;
  background: rgba(30, 30, 30, 0.9);
  border-radius: 20px;
  color: white;
}

.btn-voltar {
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-voltar span {
  color: white;
}

.hamburguer-img {
  display: flex;
  justify-content: center;
}

.hamburguer-img img {
  width: 20em;
  height: 20em;
}

.avaliacao {
  display: flex;
  align-items: center;
  background: black;
  padding: 0.5em 1em;
  border-radius: 20px;
  width: fit-content;
}

.hamburguer-container-name-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburguer-value {
  background: black;
  border-radius: 20px;
  padding: 1em 1em;
}

.add-cart{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
}

.titulo-cart {
  background: #fb8c00;
  padding: 0.7em;
  border-radius: 30px;
  width: fit-content;
}


</style>