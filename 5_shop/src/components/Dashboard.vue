<template>
    <div class="">
   
   <v-container > 
  <v-card v-for="vinho in vinhos" :key="vinho.id" 
    
    class=" d-inline-block mr-3 my-12 "
    max-width="374"
  >

    <v-img 
      height="300"
      :src="vinho.imagem"
    ></v-img>

    <v-card-title>{{ vinho.nome }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • {{vinho.origem}}
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text :to="{ name: 'detalhes-vinho', params: { id: `${vinho.id}` }}"
      >
        <!--router-link :to="{ name: 'detalhes-vinho', params: { id: `${vinho.id}` }}">Reservar</!--router-link-->
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            vinhos: null,
        };
    },
    methods: {
        async getVinhos() {
            const req = await fetch('http://localhost:3000/vinhos');
            const data = await req.json();
            this.vinhos = data;
            console.log(this.vinhos);
        }
    },
    mounted() {
        this.getVinhos();
    },
}
</script>

<style scoped>
    .grid-vinhos {
        display: inline-block;
    }
</style>