<template>
  <div>
    <SelectCategory/>    
    <CoursesList/>
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
