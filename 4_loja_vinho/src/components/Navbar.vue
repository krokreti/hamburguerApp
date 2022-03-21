<template>
  <div>
    <ul class="horizontal">
      <li class="active"><router-link to="/">Home</router-link></li>
      <li><router-link to="/grid-vinhos">Vinhos</router-link></li>
      <li><router-link to="/grid-vinhos">Grid de Vinhos</router-link></li>
      <li><router-link to="/sobre">Sobre</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  border-bottom: 1px solid black;
}

li a {
        display: block;
          float: left;
    text-align: center;
  padding: 14px 16px;
}

a {
  color: white;
  text-decoration: none;
  transition: 0.5s;

}

a:hover {
  color: red;
    background-color: #111;
}

.active {
  background-color: #04AA6D;
}
</style>