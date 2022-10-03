<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import {ref, computed, onMounted, inject} from "vue";
import {userInjectionKey} from '@/injectionKeys';
import type Emoji from "@/types/Emoji"
import type Entry from "@/types/Entry"

//data
const text = ref("")
const emoji = ref<Emoji | null>(null)
const charCount = computed<number>(() => text.value.length);
const maxChars = 280;
const user = inject(userInjectionKey);

//events
//colocar os emits para melhor documentação
const emit = defineEmits<{
  // (e: "@create", entry: { text: string; emoji: Emoji | null }): void;
  (e: "@create", entry: Entry): void;
  }>();

//template refs
const textarea = ref<HTMLTextAreaElement | null>(null);
onMounted(() =>   textarea.value?.focus()
)

//methods
const handleTextInput = (e:Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if(textarea.value.length<=maxChars) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.substring(0, 280);
  }
}

const handleSubmit = () => {
 emit('@create', 
  {
    body: text.value, 
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 1,
    id: Math.random()
  });
  text.value = "";
  emoji.value = null;
}

</script>
<template>
  <form class="entry-form" @submit.prevent="handleSubmit" >

    <textarea 
    :value="text" 
    ref="textarea"
    @keyup="handleTextInput" 
    :placeholder="`New Journal Entry for ${user?.username || 'anonymous' }`"></textarea>
    <EmojiField v-model="emoji"/>
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
