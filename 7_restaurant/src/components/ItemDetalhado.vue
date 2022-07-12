<template>
    <div class="item-detalhado">
        <div class="btn-voltar" @click="voltar"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
        <div class="btn-favorito">Favorito</div>
        <div class="item-detalhado-imagem"></div>
        <div class="item-detalhado-sobre"></div>
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
            
        }
    },
    created() {
        console.log("abriu a dialog")
    },
    methods: {
        voltar() {
            router.push({ name: 'cardapio' })
            console.log('voltei')
        }
    },
}
</script>