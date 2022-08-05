<template>
    <div>
        <div class="container mx-auto">
            <h1 class="text-lg font-bold">Serviços</h1>
            <p>
                <nuxt-link to="/servicos/desenvolvimento-de-sites">Desenvolvimento de sites</nuxt-link>
            </p>
            <p>
                <nuxt-link to="/servicos/marketing-digital">Marketing Digital</nuxt-link>
            </p>
            <br>
            <br>
            <nuxt-child />
        </div>

        <div v-if="$fetchState.pending">
            Carregando...
        </div>
        <div v-else>
            <div v-for="service in services" :key="service.id" class="border-b border-gray-400 py-4">
                {{ service.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [],
        }
    },
    async fetch() { //entra em açao dps q o componente foi criado, vc tem acesso ao this.
        this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    },
    head() {
        return {
            title: 'Serviços',
            meta: [
                { hid: 'description', name: 'description', content: 'Minha descrição do serviço' },
            ],
            bodyAttrs: {
                class: 'bg-gray-400'
            }
        }
    },
}
</script>

<style>
</style>