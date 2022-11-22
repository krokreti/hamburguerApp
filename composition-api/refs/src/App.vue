<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <h3>{{ user }}</h3>
    <h3>{{ user2 }}</h3>
  </section>
</template>


<script setup>
//ref importa um valor reativo, funciona com qlqr valor, string, boolean, number, objects, etc
import { ref, reactive } from 'vue';
//reactive é para objetos, só funciona com objetos

// props, components, continuam a msm coisa
//setup roda na inicializaçao da pagina
    const userName = ref('oi');
    const age = ref(31);

    const user = ref({
      name: 'Davi',
      age: 29
    });

    const user2 = reactive({
      name: 'Beto',
      age: 59
    });

    //para adiconar um valor a essa variavel q foi atribuida o ref, devemos atribuir ao .value dela, e se for mostrar no template, nao devemos usar o .value
    //se for um objeto criado com reactive nao precisa do .value
    setTimeout(() => {
      userName.value = 'alo';
      age.value = 33;
      user.value.name = 'Davi Pinheiro';
      user.value.age = 100
      user2.name = 'Roberto'
      user2.age = 40
    }, 2000);

  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>