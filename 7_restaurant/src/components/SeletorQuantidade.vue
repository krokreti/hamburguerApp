!<template>
    <div class="seletor-component">
        <span class="seletor-component-button-quantidade" @click="subtrair">-</span>
        <span class="seletor-component-quantidade">{{ quantidade }}</span>
        <span class="seletor-component-button-quantidade" @click="somar">+</span>
     </div>
</template>

<script>
export default {
    name: 'SeletorQuantidade',
    data() {
        return {
            quantidade: 1,
        }
    },
    methods: {
        subtrair() {
            if(this.quantidade==1) {
                alert("O valor mínimo é 1!")
            } else {
                this.quantidade--
                this.$emit('quantidade', this.quantidade)
            }
        },
        somar() {
            this.quantidade++
            this.$emit('quantidade', this.quantidade)
        }
    },
}
</script>

<style>

</style>