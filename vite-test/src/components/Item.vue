<template>
  <div class="card">
    <a :href="item.href">
    <img :src="item.imagem" alt="Icone do Serviço"/>
    </a>
    <span>{{ item.titulo }}</span>
    
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
    div {
        margin: 20px 50px 20px 30px;
        display: block;
        width: 100px;
    }

    img {
        width: 80px;
    }
    span{
        font-weight: 900;
    }

    .card {
        min-width: 120px;
        min-height: 150px;
        border: 1px solid grey;
        border-radius: 5%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        opacity: .9;
        box-shadow: 0 0 2em grey;
        transition: box-shadow .5s;
    }

    .card:hover {
        opacity: 1;
        box-shadow: 0 0 4em grey;
    }

</style>