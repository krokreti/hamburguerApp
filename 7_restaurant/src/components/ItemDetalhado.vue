<template>
    <div class="item-detalhado">
        <div class="btn-voltar" @click="voltar"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
        <div class="btn-favorito" @click="favoritar">
            <i class="fa-solid fa-heart" style="color: red;" v-if="favorite"></i>
            <i class="fa-regular fa-heart" v-else></i>
        </div>
        <div class="box">
            <div class="item-detalhado-imagem"></div>
            <div class="item-detalhado-sobre"></div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
export default {
    name: 'ItemDetalhado',
    props: {
        id: null
    },

    data() {
        return {
            favorite: false,
        }
    },
    created() {
        console.log("abriu a dialog")
    },
    methods: {
        voltar() {
            router.push({ name: 'cardapio' })
            console.log('voltei')
        },
        favoritar() {
            this.favorite = !this.favorite
        }
    },
}
</script>