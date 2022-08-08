<template>
    <div id="box" >
        <div class="display-4 text-sm-center text-left d-flex justify-center" >
            <p class="text-center" >O melhor Burger de Guaratiba</p>
        
        </div>
        <div class="display-1 font-weight-thin text-center" >
            Venha Conferir...
        </div>
        <div class="box-button d-flex justify-center pa-3">
            <router-link to="/menu" id="router-link">
            <v-btn tile color="warning" dark>
            <v-icon left>
                mdi-hamburger
            </v-icon>
                Ver Cardápio
            </v-btn>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Banner',
}
</script>

<style>
#box {
    color: white;
    height: fit-content;
}

#router-link {
    text-decoration: none;
}
@media (max-width:600px) {
    #box {
        border: 1px solid blue;
        color: white;
        width: 100%;
        padding: 0.5em;
    }

    .box-button {
        border: 1px solid blue;
        width: 100%;
    }
}

</style>