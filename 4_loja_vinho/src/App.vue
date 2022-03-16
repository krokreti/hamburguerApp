<template>
  <div class="container">
    <NavbarVue />
    <div class="row">
      <div class="column side"></div>
      <div class="column middle"> <router-view/></div>
      <div class="column side"></div>
    </div>
    <FooterVue />

  </div>
</template>

<script>
import FooterVue from "./components/Footer.vue";
import NavbarVue from "./components/Navbar.vue";
import HomeView from "./views/HomeView.vue";

export default {
  components: {
    NavbarVue,
    FooterVue,
    HomeView,
  },
};
</script>

<style>
* {
  font-family: Helvetica;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.column {
  float: left;
  padding: 10px;
}

.column.side {
  border: 3px solid black;
  width: 25%;
}

.column.middle {
  border: 3px solid red;
  width: 50%;
}

@media screen and (max-width: 600px) {
  .column.side,
  .column.middle {
    width: 100%;
  }
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
