<template>
  <div>
    <h1>{{ nome }}</h1>
    <hr />
    <div class="box-container">
      <div id="img-box">
        <img :src="vinho.imagem" alt="" width="" height="590" />
      </div>

      <div id="descricao-box">
        <div class="row">
          <div>
            <b>Nome:</b> <span>{{ nome }}</span>
          </div>

          <div>
            <b>Origem:</b> <span>{{ vinho.origem }}</span>
          </div>

          <div>
            <b>Vinícula:</b> <span>{{ vinho.vinicula }}</span>
          </div>

          <div>
            <b>Ano:</b> <span>{{ vinho.ano }}</span>
          </div>

          <div>
            <b>Preço:</b> <span>{{ vinho.preco }}</span>
          </div>

          <div>
            <b>Tipo:</b> <span>{{ vinho.tipo }}</span>
          </div>

          <div>
          <b>Classificação:</b> <span>{{ vinho.classificacao }}</span>
        </div>

        <div>
          <b>Uva:</b> <span>{{ vinho.uva }}</span>
        </div>

        <div>
          <b>Teor:</b> <span>{{ vinho.teor }}</span>
        </div>

        <div>
          <b>Harmonização:</b> <span>{{ vinho.harmonizacao }}</span>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VinhoDetalhado",
  data() {
    return {
      vinho: [],
      nome: null,
    };
  },

  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getValorPorParametro();
  },
  methods: {
    async getValorPorParametro() {
      const req = await fetch("http://localhost:3000/vinhos/" + this.id); //+ this.id);
      const data = await req.json();

      this.nome = data.nome;
      this.vinho = data;
    },
  },
};
</script>

<style scoped>
h1 {
  font: Helvetica;
  font-style: italic;
}

span {
  color: gray;
}

.box-container {
  border: 1px solid transparent;
  width: 100%;
}

#img-box {
  border: 1px solid transparent;
  width: 100%;
  height: 600px;
}

#descricao-box {
  border: 1px solid transparent;
  width: 100%;
  height: 500px;
  background: #d2d4d4;
}

.row {
  padding: 20px ;
  
}

div {
  display: block;
}
</style>