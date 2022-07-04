<template>
  
  <div class="menu-geral">

    <div class="refeicao" v-for="bolo in bolos" :key="bolo.id">
      <div class="imagem">
        <img :src="bolo.imagem" alt="Avatar" class="cartao" />
      </div>

      <div class="conteudo">
          <div class="titulo-conteudo">
              <h3>{{ bolo.nome }}</h3>
              <div class="preco-conteudo">
                  {{ bolo.preco }}
              </div>
          </div>
          <div class="descricao-conteudo">
              {{ bolo.descricao }}
          </div>

          <div class="btn-pedir">
              Pedir
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardapio",
  data() {
    return {
      bolos: [],
    }
  },
  methods: {
    async fetchCardapio() {
      const req = await fetch("http://localhost:3000/bolos");
      const data = await req.json();
      this.bolos = data;
      console.log(this.bolos)
    }
  },
  created() {
    this.fetchCardapio();
  },
};
</script>

<style scoped>
.cartao {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}
</style>