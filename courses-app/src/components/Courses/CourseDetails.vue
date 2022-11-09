<template>
    <div class="course-details-container">
        <h2>{{ course.name }}</h2>
        <div class="course-details-image" style="margin-top: 2em;">
            <img :src="require(`@/assets/courses/${course.bg_image}`)" alt="Course-Image" class="course-item-container-image">
        </div>
        <h2 style="margin-top: 1em;">Course Details</h2>

        <div v-for="(modulo, index) in course.course_modules" :key="index">
            <CourseModuleItem :courseModule="modulo" style="margin: 2em 0;"/>
        </div>
    </div>
</template>

<script lang="ts">
import {Course} from '../models/Course';
import {defineComponent} from 'vue';
import {getDetailedCourse} from '../../api/api'
import CourseModuleItem from './CourseModuleItem.vue';

export default defineComponent({
  data() {
    return {
        course: null as Course | null,
    }
  },
  methods: {
    getCourseDetailed(id: number) {
        getDetailedCourse(id).then(data => {
            this.course = data;
            console.log(this.course)
        })
    }
  },
  components: {
    CourseModuleItem,
  },
  created() {
    this.getCourseDetailed(+this.$route.params.id) //convertind string to number
  },
})
</script>

<style>
.course-details-container {
    padding: 2em;
}

</style>