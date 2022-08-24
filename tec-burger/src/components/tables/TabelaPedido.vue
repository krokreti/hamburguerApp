<template>
  <v-card dark>
    <v-card-title >
    Pedidos
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar..."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>


    <v-data-table
       dark
      :headers="headers"
      :items="pedidos"
      :search="search"
    >
    <template v-slot:item.pedido="{ item }">
        <div v-for="(lanche, index) in item.pedido" :key="index">
            <div v-if="lanche.lanche">
                {{lanche.lanche}} - {{lanche.quantidade}}
            </div>
        </div>
    </template>

    <template v-slot:item.id="{ item }">
        <div class="d-flex justify-center mt-1">
            <v-select
                dense
                    :items="items"
                    :value="item.estado"
                    label="Estado:"
                    outlined
                    @change="atualizarStatus($event, item.id)"
            ></v-select>
            
            <v-btn color="error" @click="solicitarCancelamento(item)">
                <v-icon>
                    mdi-delete
                </v-icon>
            </v-btn>
            </div>        

    </template>
    
    </v-data-table>
  </v-card>
</template>

<script>
export default {
    name: 'TabelaPedido',
    data() {
        return {
            search: '',
            statusSelecionado: '',
            headers: [
                {
                    text: 'Cliente',
                    value: 'cliente',
                    sortable: false,
                },
                {
                    text: 'Pedido - Quantidade',
                    value: 'pedido',
                    align: 'center',
                    sortable: false
                },

                {
                    text: 'Detalhes do Pedido',
                    value: 'detalhes',
                    sortable: false,
                },
                {
                    text: 'Ações',
                    value: 'id',
                    width: '25em',
                    sortable: false
                },
            ],
            items: ['Solicitado', 'Em Produção' , "Finalizado"]
        }
    },
    props: {
        pedidos: null,
    },
    methods: {
        solicitarCancelamento(item) {
            let text = `Tem certeza que deseja apagar o pedido ${item.id} do cliente ${item.cliente} ?`
            if(confirm(text) == true) {
                this.delete(item.id)
            }
        },
        async delete(id) {
            const req = await fetch(`http://localhost:3000/pedidos/${id}`, {
                method: "DELETE",
            });
            this.$emit('atualizarTabela')
        },
        async atualizarStatus(event, id) {
            const dataJson = JSON.stringify({estado: event})
            const req = await fetch(`http://localhost:3000/pedidos/${id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: dataJson,
            });
            this.$emit('atualizarTabela')
        }
    },
    
}
</script>

<style>

</style>