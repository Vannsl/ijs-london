<script setup lang="ts">
import { ref } from "vue";
import RichTextEditor from "../modules/RichTextEditor/RichTextEditor.vue";

const content = ref("<h1>Hello World! ✨</h1><p>Let's build something great.</p>");
</script>

<template>
  <RichTextEditor v-model="content"  />
</template>
