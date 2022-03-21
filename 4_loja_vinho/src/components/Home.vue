<template>
  <div class="lista-vinhos">
    <!-- Auto complete -->
    Pesquise seu vinho favorito:
    <input
      type="text"
      id="mySearch"
      @keyup="ordenar()"
      placeholder="Digite.."
    />
    <br />
    <br>

    <div id="secao">
      <!-- Grid de vinhos  :to="{ path: 'vinho-detalhado', params: { id: 1 } }" -->

      <div
        :id="vinho.nome"
        class="vinho-box"
        v-for="vinho in vinhos"
        :key="vinho.id"
        @click="enviar($event)"
      >
        <div :id="vinho.id" class="imagem-vinho">
          <img :src="vinho.imagem" alt="" width="" height="190" />
        </div>
        <div class="preco">
          {{vinho.preco}}
        </div>
        <div class="descricao-vinho">
          <p>{{ vinho.nome }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VinhoDetalhadoVue from "./VinhoDetalhado.vue";

export default {
  name: "Home",
  data() {
    return {
      vinhos: null,
      imagens: null,
      nomes: null,
      viniculas: null,
      origens: null,
      anos: null,

      id: null,
      imagem: null,
      nome: null,
      vinicula: null,
      origem: null,
      ano: null,
    };
  },
  components: {
    VinhoDetalhadoVue,
  },
  methods: {
    async getVinhos() {
      const req = await fetch("http://localhost:3000/vinhos");
      const data = await req.json();
      this.vinhos = data;
    },
    ordenar() {
      var input, filter, ul, li, a, i, x;

      input = document.getElementById("mySearch");
      filter = input.value.toUpperCase(); //pega o nome digitado para comparar

      ul = document.getElementById("secao"); //pega o ID do container pai

      li = ul.getElementsByClassName("vinho-box"); //pega o id dos elementos q se repetem (linhas)

      for (i = 0; i < li.length; i++) {
        a = li[i].innerText; // pega o nome do vinho dos elementos q se repetem
        if (a.toUpperCase().indexOf(filter) > -1) {
          // compara o nome do elemento com o digitado
          li[i].style.display = ""; //adiciona o estilo para mostrar o elemento
        } else {
          li[i].style.display = "none"; //adiciona o estilo para não mostrar o elemento
        }
      }
    },
    enviar(e) {
      const valor = e.path[1].id;
      //console.log(e.path[1].id);
      this.$router.push({ name: "vinho-detalhado", params: { id: valor } });
    },
  },
  mounted() {
    this.getVinhos();
  },
};
</script>

<style scoped>

.vinho-box {
  background-color: white;
  border: 2px solid gray;
  width: 200px;
  height: 250px;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: white;
  margin-bottom: 50px;
}

.vinho-box:hover {
  transform: scale(1.5);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  
}

.imagem-vinho {
  border: 1px solid transparent;
  height: 200px;
  background: white;
}

.descricao-vinho {
  border: 1px solid black;
  height: 3em;
  padding: 5px;
  padding-top: 10px;
  color: white;
  background: #333;
  text-align: center;
  text-shadow: 2px 2px black;
  
}

.preco {
  align-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial;
  margin-bottom: 5px;
  background: white;
}

#mySearch {
  width: 200px;
  
}

input[type=text] {
  background-color: white;
  color:black;
  background-position: 30px 30px;
  background-repeat: no-repeat;
  padding-left: 10px;

    width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>