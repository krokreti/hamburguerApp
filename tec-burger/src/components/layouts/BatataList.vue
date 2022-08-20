<template>
      <v-container>
        <div v-for="batata in batataList" :key="batata.id">
            <BatataItemVue 
            :descricao="batata.description" 
            :imagem="batata.image"
            :nome="batata.title"
            :preco="batata.price"
            :id="batata.id"
            />
        </div>
    </v-container>
</template>

<script>
import BatataItemVue from '../items/BatataItem.vue'

export default {
    name: 'BatataList',
    data() {
        return {
            batataList: [],
        }
    },
    components: {
        BatataItemVue
    },
    methods: {
        async getBatatas() {
            const req = await fetch('http://localhost:3000/batata')
            const response = await req.json();
            this.batataList = response;
            console.log("lista batata" + this.batataList)
        }
    },
    created() {
        this.getBatatas();
    },
}
</script>

<style>

</style>