<template>
  <div>
    <MessageVue :msg="msg" v-show="msg" />
    <div>
      <form action="" id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome">Nome do Cliente:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            v-model="nome"
            placeholder="Digite o seu nome"
          />
        </div>

        <div class="input-container">
          <label for="pao">Escolha o Pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a Carne:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais"
            >Selecione os opcionais:</label
          >
          <div
            class="checkbox-container"
            v-for="opcional in opcionaisData"
            :key="opcional.id"
            :value="opcional.tipo"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="opcional.tipo"
            />
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" value="Criar meu Burger" class="submit-btn" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MessageVue from "./Message.vue";

export default {
  name: "BurgerForm",
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisData: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null,
    };
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisData = data.opcionais;
    },
    async createBurger(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      };

      const dataJson = JSON.stringify(data);
      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

        //pegar os dados q foram gravados
      const res = await req.json();
      console.log(res);

      //colocar uma mensagem de sistema
      this.msg = `Pedido N° ${res.id} realizado com sucesso!`;

      //limpando a msg apos 3 segundos
      setTimeout(()=> this.msg = "", 3000);

      //limpar campos
      this.nome = "";
      this.carne = "";
      this.pao = "";
      this.opcionais = "";
    },
  },
  mounted() {
    this.getIngredientes();
  },
  components: {
    MessageVue,
  },
};
</script>

<style scoped>
#burger-form {
  margin: 0 auto;
  max-width: 400px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>