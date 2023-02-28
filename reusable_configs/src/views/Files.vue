<template>
  <h2>Teste</h2>
  <Chart type="pie" :data="chartData" />
  <div class="field col-12 md:col-4">
    <label for="basic">Basic</label>
    <Calendar inputId="basic" v-model="value" autocomplete="off" />
  </div>
</template>

<script>
import Calendar from "primevue/calendar";
import Chart from "primevue/chart";

export default {
  name: "Files",
  components: {
    Calendar,
    Chart,
  },
  data() {
    return {
      value: null,
      chartData: {
        labels: ["Davi", "Helen", "Ayka"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>