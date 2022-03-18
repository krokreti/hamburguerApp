<template>
  <div>
    <h1>Detalhes do vinho {{ vinho }}</h1>

  </div>
</template>

<script>
export default {
  name: "VinhoDetalhado",
  vinho: null,
  
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

     this.vinho = data;
     console.log(this.vinho);
    },
  },
};
</script>

<style scoped>
</style>