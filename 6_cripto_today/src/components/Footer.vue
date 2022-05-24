<template>
  <v-footer padless color="black">
    <v-col
      class="text-center white--text"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Your Cripto Friend</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>