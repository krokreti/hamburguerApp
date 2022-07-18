<template>
    <div class="item-detalhado">
        <div class="btn-voltar" @click="voltar"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
        <div class="btn-favorito" @click="favoritar">
            <i class="fa-solid fa-heart" style="color: red;" v-if="favorite"></i>
            <i class="fa-regular fa-heart" v-else></i>
        </div>
        <div class="box">
            <div class="box-item-detalhado-imagem">
                <img :src="bolo.imagem" alt="Avatar" class="cartao"/>
            </div>
            <div class="box-item-detalhado-sobre">
                <div class="box-item-detalhado-sobre-titulo">
                    {{ bolo.nome }}
                </div>
                <div class="box-item-detalhado-sobre-informacoes">
                    <span><i class="fa-solid fa-clock" style="color: blue;"></i> {{ bolo.tempo_medio }}</span>
                    <span><i class="fa-solid fa-star" style="color: gold;"></i> {{ bolo.avaliacao }}</span>
                    <span><i class="fa-solid fa-fire" style="color: red;"></i> {{ bolo.calorias }} kcal</span>
                </div>
                <div class="box-item-detalhado-sobre-quantidade">
                    <div class="box-item-detalhado-sobre-quantidade-preco">
                        <span>{{ bolo.preco }}</span>
                        <div class="box-item-detalhado-sobre-quantidade-preco-button">
                            <span>-</span>
                            <span class="centro">{{ quantidade }}</span>
                            <span>+</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
export default {
    name: 'ItemDetalhado',
    data() {
        return {
            favorite: false,
            bolo: null,
            id: null,
            quantidade: 1,
        }
    },

    created() {
        this.id = this.$route.params.id;
        this.getBoloById();
    },
    methods: {
        voltar() {
            router.push({ name: 'cardapio' })
            console.log('voltei')
        },
        favoritar() {
            this.favorite = !this.favorite
        },
        async getBoloById() {
            const req = await fetch("http://localhost:3000/bolos/" + this.id); 
            const data = await req.json();
            this.bolo = data;
            console.log(this.bolo);
        }
    },
}
</script>

<style scoped>
.cartao {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}
.centro {
    background: white;
    color: black;
}
</style>