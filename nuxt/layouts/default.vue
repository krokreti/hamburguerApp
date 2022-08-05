<template>
    <div>
        <div class="bg-gray-100">
            <div class="container mx-auto h-10 flex items-center mb-10 space-x-4">
            <nuxt-link to="/a-empresa">A empresa</nuxt-link>
            <nuxt-link to="/servicos">Serviços</nuxt-link>
            <nuxt-link to="/produtos">Produtos</nuxt-link>
            <!-- <nuxt-link :to="{ name: 'a-empresa', params: {id} }"></nuxt-link>-->
        </div>
    </div>
        <nuxt/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>