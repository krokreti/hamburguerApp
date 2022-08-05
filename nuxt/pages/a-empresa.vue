<template>
  <div>
    <div class="container mx-auto">
        <h1 class="text-lg font-bold">A Empresa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt. Pariatur, placeat quis odio corrupti repellendus eos sequi, quidem harum vitae voluptate veritatis explicabo magni natus nam, porro cum odit.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'a-empresa',
     middleware: 'auth',
    // middleware() {
    //     console.log('empresa')
    // },
}
</script>

<style>

</style>