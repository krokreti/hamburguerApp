<template>
  
  <div class="menu-geral">
    <div class="refeicao" v-for="bolo in bolos" :key="bolo.id" @click="openItem(bolo.id)">
      <div class="imagem">
        <img :src="bolo.imagem" alt="Avatar" class="cartao" />
      </div>

      <div class="conteudo">
          <div class="titulo-conteudo">
              <h3>{{ bolo.nome }}</h3>
              <div class="preco-conteudo">
                  R$ {{ bolo.preco }}
              </div>
          </div>
          <div class="descricao-conteudo">
              {{ bolo.descricao }}
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
  name: "Cardapio",
  data() {
    return {
      bolos: [],
      showItemDetalhadoDialog: false,
      idDialog: null,
    }
  },
  methods: {
    async fetchCardapio() {
      const req = await fetch("http://localhost:3000/bolos");
      const data = await req.json();
      this.bolos = data;
      console.log(this.bolos)
    },
    openItem(boloId) {
      router.push({ name: 'item-detalhado', params: { id: `${boloId}` } })
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