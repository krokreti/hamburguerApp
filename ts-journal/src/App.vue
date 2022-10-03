<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { reactive, provide, inject } from "vue";
import { userInjectionKey } from "./injectionKeys";
import type User from "./types/User";
import type Emoji from "./types/Emoji";
import type Entry from "./types/Entry";

const sum = ( x:number, y:number ) => x + y
sum(1,2)

const entries: Entry[] = reactive([]);



const user : User = reactive({
  id: 1,
  username : "davi",
  settings: []
})

provide(userInjectionKey, user);

//in child component
const injectedUser = inject(userInjectionKey);


// const handleCreateEntry = ( entry: {text: string; emoji: Emoji | null }) => {
  const handleCreateEntry = ( entry: Entry) => {
  entries.unshift(entry);
}

</script>

<template>
  

  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry"/>
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
