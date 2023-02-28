<template>
  <div>
    <h2>New Calendar</h2>
    <pro-calendar
      :events="evts"
      :loading="false"
      :config="cfg"
      view="week"
      date="'isoStringDate'"
    ></pro-calendar>
  </div>
  <!-- https://vuejsexamples.com/a-best-professional-calendar-ever-for-vue-js/ -->
  <!-- https://github.com/lbgm/pro-calendar-vue?ref=vuejsexamples.com -->
</template>

<script>
import "@lbgm/pro-calendar-vue/style";

export default {
  name: "NewCalendar",
};
</script>

<style>
</style>