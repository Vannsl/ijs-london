<script setup lang="ts">
import { watch } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { initializeExtensions } from "./utils/initializeExtensions";
import BubbleMenu from "./components/BubbleMenu.vue";

const model = defineModel<string>({ required: true });

const editor = useEditor({
  content: model.value,
  extensions: initializeExtensions(),
  onUpdate: () => {
    if (typeof editor.value === "undefined") {
      return;
    }
    model.value = editor.value.getHTML();
  },
});

watch(model, (value) => {
  if (typeof editor.value === "undefined") {
    return;
  }

  if (editor.value!.getHTML() === value) {
    return;
  }

  editor.value.commands.setContent(value, false);
});
</script>

<template>
  <div v-if="editor">
    <EditorContent :editor="editor" class="v-editor" />
    <BubbleMenu :editor="editor" />
  </div>

  <h1>Hello World</h1>
  <section>
    <h1>Hello World</h1>
  </section>
</template>

<style scoped>
.v-editor {
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
}
.v-editor :deep(*:focus-visible) {
  outline: none;
}

.v-editor :deep(.ProseMirror) {
  height: 100%;
}

.v-editor :deep(p.v-editor-empty::before),
.v-editor :deep(p.is-empty::before) {
  color: #888;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

.v-editor :deep(blockquote) {
  border: 0 solid #ccc;
  border-left-width: 0.3em;
  margin-left: 0.3em;
  padding-left: 0.6em;
}
</style>
