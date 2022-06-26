<template>
<v-app-bar
      app
      color="black"
      dark
      
    >
    <!-- 121212 -->
      <div class="d-flex align-center">

        <v-icon color="#FCC201">mdi-bitcoin</v-icon>

        <v-btn text :to="{ name: 'home' }">
        <v-icon color="blue">mdi-home</v-icon> Home
      </v-btn>

      <v-btn text :to="{ name: 'change' }">
        <v-icon color="red">mdi-heart</v-icon> Change
      </v-btn>
        
      </div>

      <v-spacer></v-spacer>

      <!--v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </!--v-btn-->
    </v-app-bar>
</template>

<script>
export default {
    name: 'Header',

    data() {
        return {
            
        }
    },
}
</script>