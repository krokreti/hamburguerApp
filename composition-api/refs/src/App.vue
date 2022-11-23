<template>
  <section class="container">
    <!-- <UserData :userName="userName" :age="age"/> -->
    <user-data :user-name="userName" :age="age" @submit="receiveData"></user-data>
    <h3>{{ user }}</h3>
    <h3>{{ user2 }}</h3>
    <h3>{{ usuarioTeste }}</h3>
    <h3>{{ nameInput }}</h3>
    <h3>{{ ageInput }}</h3>
    <button @click="setNewAge">Change Age</button>

    <input type="text" placeholder="Nome" v-model="nameInput">
    <input type="text" placeholder="Idade" ref="ageInput">
  </section>
</template>


<script setup>
//o created() agora na vdd está implicito em setup (declarado no script) /\
//ref importa um valor reativo, funciona com qlqr valor, string, boolean, number, objects, etc
import { 
  ref, 
  reactive, 
  computed, 
  watch, 
  provide,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
 } from 'vue';
import UserData from './Components/UserData.vue';
//reactive é para objetos, só funciona com objetos
//o data() do options API é substituido pelo ref e reactive

// props, components, continuam a msm coisa
//setup roda na inicializaçao da pagina
    const userName = ref('oi');
    const age = ref(31);
    const nameInput = ref('')
    const ageInput = ref(null)
    const nomeUsuario = ref('nome teste')

    provide('nomeUsuario', nomeUsuario)

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

    //assim q se declara funcao no composition api, funciona com ref e reactive
    function setNewAge() {
      user2.age = 200
      user.value.age = 200
      age.value = 29
    }

    function receiveData(data) {
      console.log(data)
    }

    // declarando um computed
    const usuarioTeste = computed(() => {
      return user.value.name;
    })

  // utilizando um watch
  watch(age, (newValue, oldValue) => {
    console.log("oldValue: " + oldValue)
    console.log("newValue: " + newValue)
  })

  //array de objetos
  watch([userName, usuarioTeste], (newValue, oldValue) => {
    console.log("oldValue: " + oldValue)
    console.log("newValue: " + newValue)
  })

  onMounted(() => {
    console.log('Mounted')
  })

  onBeforeMount(() => {
    console.log('Before Mounted')
  })

  onBeforeUpdate(() => {
    console.log('Before Update')
  })

  onUpdated(() => {
    console.log('Updated')
  })

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