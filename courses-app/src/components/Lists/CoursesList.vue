<template>
    <div class="courses-list">
        <h3>Últimos cursos lançados</h3>
        <div  v-for="(course, index) in courses" :key="index">
          <CourseItem :course="course"/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CourseItem from '../Courses/CourseItem.vue';
import Course from '../models/Course'
import {getCourses} from '../../api/api'

export default defineComponent({
  data() {
    return {
      courses: null as Course | null,
      curso: null as Course | null,
    }
  },
  components: {
    CourseItem,
  },
  methods: {
    getCourses() {
        getCourses().then(data => {
            this.courses = data;
        }).catch(error => {
          console.error(error)
        })
    }
  },
  created() {
    this.getCourses();
  },
})
</script>

<style>
.courses-list {
    padding: 0 2em;
    max-width: 50em;
}
</style>