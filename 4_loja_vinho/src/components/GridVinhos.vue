<template>
  <div class="container-central">
    <h1>Lista de Vinhos</h1>
    <hr />
    <br />

    <div class="card" v-for="vinho in vinhos" :key="vinho.id">
      <img :src="vinho.imagem" alt="Denim Jeans" style="width: 100%" />
      <h1>{{ vinho.nome }}</h1>
      <p class="price">{{  vinho.preco  }}</p>
      <p>{{vinho.descricao}}</p>
      <p><button>Add to Cart</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridVinhos",
  data() {
    return {
      vinhos: null,
      imagens: null,
      nomes: null,
      descricoes: null,
      origens: null,
      anos: null,
      precos: null,

      imagem: null,
      nome: null,
      descricao: null,
      origem: null,
      ano: null,
      preco: null,
    };
  },
  methods: {
    async getVinhos() {
      const req = await fetch("http://localhost:3000/destilados");
      const data = await req.json();

      this.vinhos = data.vinhos;
    },
  },
  mounted() {
      this.getVinhos();
  },
};
</script>

<style scoped>

.container-central {
    align-content: center;
    align-items: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  display: inline-block;
  margin-bottom: 20px;
  margin-right: 20px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>