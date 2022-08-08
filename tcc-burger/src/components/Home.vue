<template>
    <div id="banner-box" >
        <BannerVue/>
    </div>
</template>

<script>
import BannerVue from './layouts/Banner.vue'

export default {
    name: 'Home',
    components: {
        BannerVue     
    }
}

</script>

<style>
#banner-box {
    width: 50%;
    height: fit-content;
    padding: 3em;
}

@media (max-width: 600px) {
    #banner-box {
        width: 100%;
        height: 100%;
        padding: 0;
    }
}
</style>