<template>
    <div class="menu-background" v-if="showMenu" @click="$emit('close')"></div>
    <transition name="master">
        <div class="menu" v-if="showMenu">
            <div class="menu-header">
                <div>
                    AAAA
                </div>
                <div>
                    <button class="btn " @click="$emit('close')"> X </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    props: ['showMenu']
})
</script>

<style>
.menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 75%;
    background-image: linear-gradient(to right, rgba(184, 201, 207, 1), rgba(246, 250, 242, 1));
    z-index: 2;
    /* animation: enter 0.3s ease-out forwards; */
}

.master-enter-active {
    animation: enter 0.3s ease-out;
}

.master-leave-active {
    animation: enter 0.3s ease-in reverse;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateX(-500px) scale(1);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
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

@media (min-width: 700px) {
    .menu {
        width: 40%;
    }
}
</style>