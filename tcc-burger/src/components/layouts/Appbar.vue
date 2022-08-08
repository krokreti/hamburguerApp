<template>
  <v-toolbar
    dark
    height="80%"
    >
      <v-template class="ml-4">
        <router-link to="/">

        <v-app-bar-nav-icon >
        <v-img
        src="../../../public/logo.png"
        aspect-ratio="1"
        class="ma-1"
        ></v-img>
        </v-app-bar-nav-icon>
        </router-link>
      </v-template>

      <v-template class="ml-2">
        <v-toolbar-title >Tech Burger</v-toolbar-title>
      </v-template>

      <v-spacer></v-spacer>

    </v-toolbar>
</template>

<script>
export default {
    name: 'AppBar'
}
</script>

<style>

</style>