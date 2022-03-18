<template>
  <div>
    <h1><span> {{ nome }} </span></h1>

  </div>
</template>

<script>
export default {
  name: "VinhoDetalhado",
  data() {
      return {
          vinho: null,
          nome: null,
      }
  },
  
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getValorPorParametro();
  },
  methods: {
    async getValorPorParametro() {
      const req = await fetch("http://localhost:3000/vinhos/1") //+ this.id);
      const data = await req.json();
     this.nome = data.nome;
     this.vinho = data;
    },
  },
};
</script>

<style scoped>
 span {
      font-family: Georgia, Verdana;
     font-style: italic;
 }
</style>