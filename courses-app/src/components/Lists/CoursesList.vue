<template>
    <div class="courses-list">
        <h3>Últimos cursos lançados</h3>
        <CourseItem/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CourseItem from '../Courses/CourseItem.vue';
import User from '../models/User'

export default defineComponent({
  data() {
    return {
      courses: null as User | null
    }
  },
  components: {
    CourseItem,
  }
})
</script>

<style>
.courses-list {
    padding: 0 2em;
    max-width: 50em;
    
}
</style>