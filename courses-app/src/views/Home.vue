<template>
  <div>
    <SelectCategory/>    
    <div class="home-container">
      <CoursesList/>
    </div>
  </div>
</template>

<script lang="ts">

import CoursesList from '@/components/Lists/CoursesList.vue';
import SelectCategory from '@/components/SelectorCategory/SelectCategory.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {
    SelectCategory,
    CoursesList,    
  }
})
</script>

<style>
.home-container {
  display: flex;
  justify-content: center;
}
</style>