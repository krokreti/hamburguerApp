<template>
    <div><button @click="showModal = !showModal">open menu</button></div>
    <div class="menu-background" v-if="showModal">
    <div class="menu" >
        <div class="menu-header">
            <div>
                AAAA
            </div>
            <div>
                <button class="btn" @click="showModal=false"> X </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    data() {
        return {
            showModal: false,
        }
    },
})
</script>

<style>
.menu {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 75%;
    background-image: linear-gradient(to right, rgba(184, 201, 207, 1), rgba(246, 250, 242, 1));
}

.menu-background {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.menu-header {
    display: flex;
    justify-content: space-between;
    padding: 2em;
}
</style>