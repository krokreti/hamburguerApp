<template>
  <div>

    <pre>{{ $store.state.user }}</pre>
    <pre> {{ user }} </pre>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'IndexPage',
    computed: {
      ...mapState({
        user: state => state.user
      })
  },
  //so é rodado no client side
  mounted() {
    console.log(this.$nomePlugin('cleiton'))
    console.log("??????????")
    console.log(this.$dayjs().format())
    console.log("??????????")
  },
}

</script>
