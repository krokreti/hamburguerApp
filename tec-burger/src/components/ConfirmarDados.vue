<template>
  <v-container class="finalizar-container">
    <h5 class="text-h4 text-center">Confirme seus dados:</h5>
    <StepperVue :value="3" :step1="true" :step2="true"/>
    <FormConfirmacao/>
  </v-container>
</template>

<script>
import FormConfirmacao from './forms/FormConfirmacao.vue'
import StepperVue from './stepper/Stepper.vue'

export default {
    name: 'ConfirmarDados',
    data() {
        return {
            
        }
    },
    components: {
        FormConfirmacao,
        StepperVue
    },
}
</script>

<style>

</style>