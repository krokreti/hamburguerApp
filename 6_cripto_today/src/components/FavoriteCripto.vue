<template>
  <v-container>
    <v-row justify="space-around">
      <v-col>
        <v-sheet
          shaped
          class="mx-auto"
          height="500"
          width="300"
        >
          <div class="card">
            <img :src="cripto.image.large" alt="Avatar" class="cartao" />
            <div class="container">
              <v-row > <h3><b>{{ cripto.name }}</b></h3> </v-row>
              
              <v-row> <p> {{ valor_atual }} </p> <v-spacer></v-spacer> {{ cripto.market_data.market_cap_change_percentage_24h }} %</v-row>
              
              <v-row><p> Market Cap: {{ marketCap }} </p> </v-row>
              <v-row><p :style="price_color">24h Change: {{ cripto.market_data.price_change_24h_in_currency.usd }} </p></v-row>
              <v-row><p> Total Supply: {{ supply_total }}</p></v-row>

            </div>
          </div>

        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FavoriteCriptoComponent",

  data() {
    return {
      cripto: null,
      valor_atual: null,
      price_color: null,
      supply_total: null,
      marketCap: null,
      backgroundPrice: null,
    };
  },
  methods: {
    async getFavoriteCripto() {
      const req = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
      const data = await req.json();
      this.cripto = data;
      console.log(this.cripto);
      var converterSupply = data.market_data.total_supply;
      this.supply_total = converterSupply.toLocaleString('pt-BR')
      var converterMarketCap = data.market_data.market_cap.usd
      this.marketCap = converterMarketCap.toLocaleString('pt-BR')

    },
    async getRealTimeValue() {
      const req = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
      const data = await req.json();
      this.valor_atual = data.market_data.current_price.usd;
      var converteMoeda = this.valor_atual;
      
      this.valor_atual = converteMoeda.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

      if (this.cripto.market_data.price_change_24h_in_currency.usd>0) {
          this.price_color="color:green;"
          
      } else if (this.cripto.market_data.price_change_24h_in_currency.usd<0) {
          this.price_color="color:red;"
          this.backgroundPrice="background-color:green"
          
      } else {
          this.price_color = "color:black;"
          this.backgroundPrice="background-color:green"
      }

    }
  },
  mounted() {
    this.getFavoriteCripto();
    this.getRealTimeValue();
  },
};
</script>

<style scoped>


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  background-color: lightgray;
  padding: 10px;
  margin-top: 10px;
  
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  height: 100%;
  
}

.cartao {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}
</style>