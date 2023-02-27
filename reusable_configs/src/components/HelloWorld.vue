<template>
  <div>
    <h3>Teste</h3>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "HelloWorld",

  methods: {
    async getData() {
      // const resultado = await get({ url: "bpi/currentprice.json" });
      api.get({ url: "posts/1" }).then((resultado) => {
        console.log(resultado);
      });
    },
    async postData() {
      api
        .post({
          url: "posts",
          body: { title: "foo", body: "bar", userId: 1 },
        })
        .then((resultado) => {
          console.log(resultado);
        });
    },
    async patchData() {
      api
        .patch({ url: "posts/1", body: { title: "testei" } })
        .then((resultado) => {
          console.log(resultado);
        });
    },
    async deleteData() {
      api.delete({ url: "posts/1" }).then((resultado) => {
        console.log(resultado);
      });
    },
  },
  created() {
    this.patchData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

