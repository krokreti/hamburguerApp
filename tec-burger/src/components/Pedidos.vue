<template>
  <v-container class="finalizar-container">
    <p class="text-h4 text-center mb-5">Pedidos</p>
    <TabelaPedidoVue :pedidos="pedidos" @atualizarTabela="getPedidos()"/>
  </v-container>
</template>

<script>
import TabelaPedidoVue from './tables/TabelaPedido.vue'

export default {
    name: 'Pedidos',
    data() {
        return {
            pedidos: [],
        }
    },
    created() {
        this.getPedidos();
    },
    methods: {
        async getPedidos() {
            const req = await fetch('http://localhost:3000/pedidos');
            const response = await req.json();
            this.pedidos = response;
            console.log(this.pedidos);
        }
    },
    components: {
        TabelaPedidoVue,
    }
}
</script>

<style>
.finalizar-container {
  margin: 1em auto;
  background: rgba(30, 30, 30, 0.9);
  border-radius: 20px;
  color: white;
}
</style>