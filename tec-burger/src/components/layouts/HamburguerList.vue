<template>
    <v-container>
        <div v-for="hamburguer in hamburguerList" :key="hamburguer.id">
            <HamburguerItemVue 
            :descricao="hamburguer.description" 
            :imagem="hamburguer.image"
            :nome="hamburguer.title"
            :preco="hamburguer.price"
            :id="hamburguer.id"
            />
        </div>
    </v-container>
</template>

<script>
import HamburguerItemVue from '../items/HamburguerItem.vue'

export default {
    data() {
        return {
            hamburguerList: [],
        }
    },
    components: {
        HamburguerItemVue
    },
    methods: {
        async getBurgers() {
            const req = await fetch('http://localhost:3000/hamburguer')
            const response = await req.json();
            this.hamburguerList = response;
        }
    },
    created() {
        this.getBurgers();
    },
}
</script>

<style>

</style>