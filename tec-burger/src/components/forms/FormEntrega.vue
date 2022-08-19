<template>
  <v-container>
    <v-stepper dark v-model="e1" class="mb-5">
        <v-stepper-header>
            <v-stepper-step step="1" complete>Carrinho</v-stepper-step>
            <v-divider></v-divider>
        <v-stepper-step step="2">Confirmar Endereço</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Aguardar Entrega</v-stepper-step>
        </v-stepper-header>
    </v-stepper>

    <v-form v-model="valid">
        <v-row justify="center">
            <v-col cols="12" sm="12" md="4">
                <v-text-field
                    v-model="cep"
                    :rules="cepRules"
                    :counter="8"
                    label="Digite o CEP (Somente números)"
                    dark
                    outlined
                    required
                    @keyup="validarCEP"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="endereco" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="numero"
            dark
            outlined
            label="Número"
            required
            :rules="numeroRules"
            >
            </v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="endereco" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="complemento"
            dark
            outlined
            label="Complemento"
            >
            </v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="endereco" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.logradouro"
            dark
            disabled
            outlined
            label="Rua"
            filled>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="endereco" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.bairro"
            dark
            disabled
            outlined
            label="Bairro"
            filled>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="endereco" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.localidade"
            dark
            disabled
            outlined
            label="Cidade"
            filled>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="endereco" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.uf"
            dark
            disabled
            outlined
            label="Estado"
            filled>
            </v-text-field>
        </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
    name: 'FormEntrega',
    data() {
        return {
            cep: null,
            valid: false,
            endereco : null,
            complemento: null,
            e1:2,
            numero: null,
            numeroRules: [
                v => !!v || 'O Número é obrigatório!'
            ],
            cepRules: [
                v => !!v || 'CEP é obrigatório!',
                v => v.length <= 8 || 'CEP deve ter menos de 8 dígitos!',
            ]
        }
    },
    methods: {
        async validarCEP() {
            if(this.cep.length==8) {
                console.log('cep tem 8 digitos')
                const req = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
                    const response = await req.json()
                    this.endereco = response;
            } else {
                this.endereco = null;
            }
        }
    },
}
</script>

<style>

</style>