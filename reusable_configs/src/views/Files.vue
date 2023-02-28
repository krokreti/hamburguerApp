<template>
  <h2>Teste</h2>
  <div class="chart-container">
    <Chart type="pie" :data="chartData" />
  </div>
  <div class="field col-12 md:col-4">
    <label for="basic">Basic</label>
    <Calendar
      inputId="basic"
      v-model="value"
      autocomplete="off"
      dateFormat="dd/mm/yy"
      :showButtonBar="true"
      :touchUI="true"
      :showIcon="true"
      :date-select="dateHandler"
    >
      <template #header>Header Content</template>
      <template #footer>Footer Content</template>
    </Calendar>
    {{ value }}
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
  methods: {
    dateHandler() {
      console.log("oi");
      console.log(value);
    },
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
.chart-container {
  width: 18em;
  height: 15em;
}
</style>