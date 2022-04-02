<template>
  <div>
    <div class="text-h2 mt-5">{{ vinho.nome }}</div>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-container>
      <v-row no-gutters>
        <v-col cols="6">
          <v-sheet shaped class="pa-12" color="red lighten-4" height="800">
            <sheet-footer>
              <v-img height="700" :src="vinho.imagem"></v-img>
            </sheet-footer>
          </v-sheet>
        </v-col>

        <v-col cols="6">
          <v-sheet shaped class="pa-12" color="blue lighten-3" height="250">
            <sheet-footer>
              <v-row>
                Nome: <b> {{ vinho.nome }} </b></v-row
              >
              <v-row>
                Vinícula: <b>{{ vinho.vinicula }} </b></v-row
              >
              <v-row>
                Origem: <b>{{ vinho.origem }} </b></v-row
              >
              <v-row>
                Uva: <b> {{ vinho.uva }} </b></v-row
              >
              <v-row>
                Teor: <b>{{ vinho.teor }} </b></v-row
              >
              <v-row>
                Classificação: <b>{{ vinho.classificacao }} </b></v-row
              >

              <v-row>
                <v-btn
                  class="ma-2"
                  :loading="adicionando"
                  :disabled="adicionando"
                  color="success"
                  @click="adicionaCarrinho()"
                >
                  <v-icon>mdi-cart-outline</v-icon>
                  Adicionar ao Carrinho
                  <template v-slot:loader>
                    <span>Adicionando...</span>
                  </template>
                </v-btn>
              </v-row>
            </sheet-footer>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "detalhes-vinho",
  data() {
    return {
      id: null,
      vinho: null,
      adicionando: false,
      loader: null,

    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  methods: {
    async getDataByUrl() {
      const req = await fetch(`http://localhost:3000/vinhos/${this.id}`);
      const data = await req.json();
      this.vinho = data;
    },
    async adicionaCarrinho() {
      this.loader = "adicionando";



      console.log(this.carrinho);
    },
  },
  mounted() {
    this.getDataByUrl();
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style scoped>
</style>