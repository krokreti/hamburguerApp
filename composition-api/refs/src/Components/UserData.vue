<template>
  <h2>{{ props.userName }}</h2>
  <h3>{{ props.age }}</h3>
  {{ usuario }}
  <button @click="sendToParent">Enviar</button>
</template>

<script setup>
    import { inject } from 'vue';

    const usuario = inject('nomeUsuario')
    // ['userName', 'age']
    const props = defineProps(['userName', 'age']);
    const emits = defineEmits(['submit'])

    function sendToParent() {
        emits('submit', { nome: props.userName, idade: props.age })
    }
</script>

<style>

</style>