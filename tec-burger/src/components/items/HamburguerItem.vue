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
      <img :src="image" alt="produto" />
    </div>

    <div class="avaliacao">
      <v-icon color="warning">mdi-star</v-icon>
      {{ hamburguer.ranked }}
    </div>

    <div class="hamburguer-container-name-value">
      <div class="hamburguer-name text-h4"> {{ hamburguer.title }} </div>

      <div class="hamburguer-value" >
        <v-row class="d-flex justify-center">
          Quantidade:
        </v-row>
        <v-row>
          <v-col>
        <v-text-field dark readonly v-model="cartItemNumber" rounded  style="width:10em;">
          <v-icon  slot="append" color="warning" @click="adicionarCarrinho()">
            mdi-plus
          </v-icon>
            
          <v-icon
            slot="prepend"
            color="red"
            :disabled="cartItemNumber==0"
            @click="removerCarrinho()"
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
      <p class=" font-weight-light"> {{ hamburguer.description }}</p>
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

    <div>
      {{ this.$store.getters.carts }}
    </div>

    <div>
      {{ this.$store.getters.cartItemNumber }}
    </div>

    <div class="add-cart">
       <span class="green--text text--lighten-2" > 
        {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(hamburguer.price) }}
        </span>
      <Cart :type="'botao'"/>
    </div>
      <Snackbar :snackbar="snackbar" :text="texto"/>
  </v-container>
</template>

<script>
import Cart from '../carrinho/Cart.vue';
import Snackbar from '../layouts/Snackbar.vue';

export default {
    data() {
        return {
            id: null,
            hamburguer: [],
            image: '',
            quantidade: null,
            cart: null,
            snackbar: false,
            texto: '',
        };
    },
    computed: {
      cartItemNumber() {
        return this.$store.getters.cartItemNumber
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.getHamburgerById();
    },
    methods: {
        async getHamburgerById() {
          const req = await fetch('http://localhost:3000/hamburguer/' + this.id);
          const response = await req.json();
          this.hamburguer = response;
          console.log(this.image);
          console.log(response)
        },
        adicionarCarrinho() {
            const data = {
                id: this.hamburguer.id,
                nome: this.hamburguer.title,
                preco: this.hamburguer.price,
            };
            this.texto = 'O Item foi adicionado com sucesso!';
            this.snackbar = true;
            this.$store.dispatch("addToCart", data);
            this.quantidade = this.$store.getters.cartItemNumber
        },
        removerCarrinho() {
            const data = {
                id: this.hamburguer.id,
                nome: this.hamburguer.title,
                preco: this.hamburguer.price,
            };
            this.texto = 'O Item foi removido com sucesso!';
            this.snackbar = true;
            this.$store.dispatch("removeFromCart", data);
            this.quantidade = this.$store.getters.cartItemNumber
        }
    },
    components: { 
      Snackbar,
      Cart,
    }
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