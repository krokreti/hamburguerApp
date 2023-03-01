<template>
  <h2>Big Calendar</h2>
  <FullCalendar :options="options">
    <template v-slot:eventContent="arg">
      <b>{{ arg.event.title }}</b>
    </template>
  </FullCalendar>
</template>

<script>
import "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventArray from "../assets/events.json";

export default {
  name: "BigCalendar",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  methods: {
    handleDateClick(arg) {
      console.log("clicked");
      console.log(arg);
      console.log(arg.dateStr);
    },
  },

  data() {
    return {
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialDate: "2017-02-01",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        dateClick: this.handleDateClick,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: EventArray.data,
      },
    };
  },
};
</script>

<style>
</style>