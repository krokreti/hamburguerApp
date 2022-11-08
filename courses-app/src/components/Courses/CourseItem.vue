<template>
  <div class="course-item-container">
    <img src="../../assets/courses/calculator-course.jpg" alt="Image-Profile" class="course-item-container-image">
    <div class="course-item-container-teacher">
        TESTE
    </div>
    <div class="course-item-container-price">
        $100
    </div>
  </div>
    <div class="course-item-container-title">
        <span>Adobe Reader</span>
        <span>Start: 18/jun</span>
    </div>
    <div class="course-item-container-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum illo, temporibus est inventore sequi, praesentium doloremque odio unde veritatis in sit, sed minus sapiente quia ad et. Reiciendis, corrupti?
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  props: {

  }
})
</script>

<style>
.course-item-container {
    margin-top: 2rem;
    position: relative;
}

.course-item-container-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.course-item-container-teacher {
    background: black;
    width: fit-content;
    padding: 0.8em 1.8em;
    border-radius: 2em;
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
}

.course-item-container-price {
    background: white;
    width: fit-content;
    padding: 0.8em 1.8em;
    border-radius: 2em;
    color: black;
    font-weight: bold;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}

.course-item-container-image {
    height: 100%;
    width: 100%;
    border-radius: 2em;
}
</style>