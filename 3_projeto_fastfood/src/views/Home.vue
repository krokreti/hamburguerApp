<template>
<div>
    <Banner/>
    <div class="main-container">
        <h1>Monte o seu hamburguer: </h1>
        <BurgerForm/>
    </div>
</div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '../components/BurgerForm.vue'


export default {
    components: {
        Banner,
        BurgerForm
    }
    
}
</script>

<style scoped>

</style>