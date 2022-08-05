<template>
  <div>
    <div class="container mx-auto">
        <h1 class="text-lg font-bold">Produtos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt. Pariatur, placeat quis odio corrupti repellendus eos sequi, quidem harum vitae voluptate veritatis explicabo magni natus nam, porro cum odit.</p>
        <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
    </div>

    <div v-for="product in products" :key="product.id" class="border-b border-gray-400 py-3">
      {{ product.title }}
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  //asyncData popula o data(), nao pode usar o this 
  async asyncData({ $axios }) { //roda antes dos componentes serem montados.
    const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts');
    return {
      products,
    }
  },

}
</script>

<style>

</style>