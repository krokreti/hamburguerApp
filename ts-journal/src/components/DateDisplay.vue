<template>
  <div>{{ formatted }}</div>
</template>

<script lang="ts">
import formatRelative from "date-fns/formatRelative";
import { defineComponent } from "vue";
import type Entry from '@/types/Entry';
import type { PropType } from "vue";

export default defineComponent({

  props: {
    date: { type: Date, required: true },
    // date: { type: Object as PropType<Entry>, required: true },
  },
  computed: {
    formatted(): string {
      return formatRelative(this.date, Date.now());
    },
  },
  mounted() {
    this.$http("https://myendpoint.com")
  },
});
</script>

