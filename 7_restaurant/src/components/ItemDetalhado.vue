<template>
    <div class="item-detalhado">
        <div class="container-btn">
            <div class="voltar" @click="voltar"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
            <div class="favorito" @click="favoritar">
                <i class="fa-solid fa-heart" style="color: red;" v-if="favorite"></i>
                <i class="fa-regular fa-heart" v-else></i>
            </div>
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
                        <span>R$ {{ preco }}</span>
                        <SeletorQuantidadeVue @quantidade="updatePreco"/>
                    </div>
                </div>
            </div>
            <div class="box-adicionar-carrinho">
                    <span><i class="fa-solid fa-cart-shopping"> Adicionar ao Carrinho</i></span>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import SeletorQuantidadeVue from './SeletorQuantidade.vue';
export default {
    name: 'ItemDetalhado',
    data() {
        return {
            favorite: false,
            bolo: null,
            id: null,
            preco: null,
        }
    },

    created() {
        this.id = this.$route.params.id;
        this.getBoloById();
    },
    computed: {
        
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
            this.preco = this.bolo.preco.toFixed(2);
        },
        updatePreco(quantidade) {
            let valorTotal = 0;
            if(quantidade==null) {
                return this.preco
            } else {
                valorTotal = quantidade * this.bolo.preco
                valorTotal = valorTotal.toFixed(2)
                this.preco = valorTotal
                return this.preco
            }
        }
    },
    components: {
        SeletorQuantidadeVue
    }
}
</script>

<style scoped>
.cartao {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}
</style>