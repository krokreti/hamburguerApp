
<template>
  <div class="text-center section">
    <h2 class="h2">Custom Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Roll your own calendars using scoped slots
    </p>
    <vc-calendar
      class="custom-calendar max-w-full"
      style="max-width: 100%; border-radius: 10px"
      :masks="masks"
      :attributes="attributes"
      is-expanded
      locale="pt-BR"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div
          class="flex flex-col h-full z-10 overflow-hidden"
          style="
            display: flex;
            flex-direction: column;
            padding: 0 5px 3px;
            text-align: left;
            height: 90px;
            min-width: 90px;
            z-index: 10;
            overflow: hidden;
            background-color: #fff;
            border: 1px solid #b8c2cc;
          "
          @click="onDayClick(day)"
        >
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div
            class="flex-grow overflow-y-auto overflow-x-auto"
            style="flex-grow: 1; overflow-y: auto; overflow-x: auto"
          >
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              style="
                border-radius: 0.125rem;
                color: white;
                padding: 0.25rem;
                margin-top: 0;
                margin-bottom: 0.25rem;
                font-size: 0.75rem;
                line-height: 1.25em;
              "
              :class="attr.customData.class"
              :style="attr.customData.style"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </vc-calendar>
    <vc-calendar title-position="left" />
  </div>
  <!-- https://docs.vcalendar.io/data.html -->
  <!-- https://ui.toast.com/tui-calendar -->
  <!-- https://vuejsexamples.com/a-best-professional-calendar-ever-for-vue-js/ -->
</template>

<script>
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: "WWW",
      },
      attributes: [
        {
          key: 1,
          dot: "orange",
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: "Take Noah to basketball practice",
            class: "bg-blue-500 text-white",
            style: "background-color:#4299e1;",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 22,
          customData: {
            title: "Take Noah to basketball practice",
            class: "bg-blue-500 text-white",
            style: "background-color:#e53e3e;",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 23,
          customData: {
            title: "Take Noah to basketball practice",
            class: "bg-blue-500 text-white",
            style: "background-color:#38b2ac;",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: "bg-blue-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Take car to the shop",
            class: "bg-indigo-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Meeting with new client.",
            class: "bg-teal-500 text-white",
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: "Cookout with friends.",
            class: "bg-orange-500 text-white",
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: "Visit great grandma.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },
  methods: {
    onDayClick(day) {
      console.log(day);
    },
  },
};
</script>

<style >
.vc-day-weekday-7 {
  background-color: #eff8ff !important;
}
</style>



<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>