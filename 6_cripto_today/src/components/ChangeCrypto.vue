<template>
    <v-container class="mx-auto">
        <v-autocomplete
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        hide-details
        hide-selected
        label="Escolha sua criptomoeda favorita"
        solo
        append-icon="mdi-currency-btc"
        prepend-icon="mdi-bitcoin"
        right>

        </v-autocomplete>

    </v-container>
</template>

<script>
export default {
    name: 'ChangeCrypto',
    data() {
        return {
            isLoading: false,
            items: [],
            model: null,
            search: null,
        }
    },
}
</script>