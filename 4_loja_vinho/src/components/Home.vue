<template>
    <div>
        <input type="text" id="mySearch" @keyup="ordenar()" placeholder="Search.." >
        <br>
        <div id="secao">

        <div :id="vinho.nome" class="vinho-box" v-for="vinho in vinhos" :key="vinho.id" >

            <div class="imagem-vinho">
                <img :src="vinho.imagem" alt="" width="" height="190"> 
            </div>
            <div class="descricao-vinho">
                <p>{{ vinho.nome }}</p>
            </div>

        </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            vinhos: null,
            imagens: null,
            nomes: null,
            descricoes: null,
            origens: null,
            anos: null,
            
            id: null,
            imagem: null,
            nome: null,
            descricao: null,
            origem: null,
            ano: null
        }
    },
    methods: {
        async getVinhos() {
            const req = await fetch("http://localhost:3000/destilados");
            const data = await req.json();

            this.vinhos = data.vinhos;     
            
        },
        ordenar() {
            var input, filter, ul, li, a, i, x;

            input = document.getElementById("mySearch");
            filter = input.value.toUpperCase(); //pega o nome digitado para comparar
            
            ul = document.getElementById("secao"); //pega o ID do container pai
            
            li = ul.getElementsByClassName("vinho-box"); //pega o id dos elementos q se repetem (linhas)

            for (i = 0; i < li.length; i++) {
                a = li[i].innerText; // pega o nome do vinho dos elementos q se repetem
               if(a.toUpperCase().indexOf(filter) > -1) { // compara o nome do elemento com o digitado
                    li[i].style.display = ""; //adiciona o estilo para mostrar o elemento
                } else {
                    li[i].style.display = "none"; //adiciona o estilo para não mostrar o elemento
                } 
            } 
        }
    },
    mounted() {
        this.getVinhos();
    }
}
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
        transition: .5s;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .vinho-box:hover {
        transform: scale(1.5);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }



    .imagem-vinho {
        border: 1px solid blue;
        height: 200px;
        
    }

    .descricao-vinho {
        border: 1px solid tomato;
        height: 3em;
        padding: 5px;
        padding-top: 10px;
        color:white;
        background: #333;
        text-align: center;
        text-shadow: 2px 2px black;
    }


</style>