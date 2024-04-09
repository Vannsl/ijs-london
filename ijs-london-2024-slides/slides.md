---
theme: default
background: "./cover.png"
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: "Unleashing the Power of AI: Integrating Tiptap, OpenAI, and Vue.js"
mdc: true
---


---
transition: slide-up
layout: cover
---

# Unleashing the Power of AI: Integrating Tiptap, OpenAI, and Vue.js

---
transition: slide-up
layout: image-right
image: https://res.cloudinary.com/vannsl-io/image/upload/v1555928691/IMG_4127.jpg
---

# Hi!

I'm Vanessa Otto

- Head of Frontend at <a href="https://www.zavvy.io/" target="_blank" rel="nofollow noopener">Zavvy by deel</a> <br>
- Co-Host of <a href="https://workingdraft.de" target="_blank" rel="nofollow noopener">Working Draft</a>, <a href="https://expect-exception.netlify.app/" target="_blank" rel="nofollow noopener">Expect Exception</a>, and <a href="https://ausbaufaehig-podcast.de/" target="_blank" rel="nofollow noopener">Ausbaufähig</a>
- @vannsl / @vanessa_otto

---

# Today

we will

<v-clicks>

- 📝 Install Tiptap
- 🎨 Create AI Extension
- 🧑‍💻 Using Vue 3

</v-clicks>

---
layout: default
---

# Technical Research


<v-clicks>

- Backend compatible output, in JSON or HTML
- "Notion like" design (floating menus)
- Custom "blocks": embeddings, AI widgets, etc.
- Markdown Support, Keyboard Shortcuts, Collaboration
- Developer Experience* (Docs, Vue 3 Support)

</v-clicks>

<p v-click class="opacity-60">*Strong DX can lead to great UX</p>

---
transition: slide-up
---

<div style="overflow-y:scroll; height: 100vh;padding-bottom:400px;">
<img src="/research.png">
</div>

---
transition: slide-up
---

# Vue.js Nation

<img src="/tinymce.png">

---
transition: slide-up
---

# Vue.js Nation

<img src="/ckeditor.png">

---
transition: slide-left
---

# Tiptap Framework


|     |     |
| --- | --- |
| **Nodes** | <code>block</code> |
|  | Paragraph, Bullet list, Code blocks, etc. |
| **Marks** | <code>inline</code> |
| | bold, italic, code, etc. |
| **Extensions** | First party, community, and your own |
| **Commands** | Programmatically change content and alter selections |
| <code>@tiptap/pm</code> | Tiptap is built on ProseMirror, internals accessible |

---
transition: slide-up
---

# Demo

<a href="http://localhost:5173" target="_blank" rel="noopener noreferrer">Demo project</a>



<video width="500" controls>
  <source src="/demo.mov" type="video/mp4">
</video>


---
transition: slide-up
---

# Create Editor



```html {all|1-9}
<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  content: "Hello, World!";
  extensions: [StarterKit],
});
</script>

<template>
  <EditorContent :editor="editor" />
</template>
```

---
transition: slide-up
---

# Create Editor

```ts {all|4,7|8|9|10|11-13}
import { useEditor } from "@tiptap/vue-3";
import { initializeExtensions } from "./extensions";

const model = defineModel();

const editor = useEditor({
  content: model.value,
  editable: true,
  autofocus: false,
  extensions: initializeExtensions(),
  onUpdate: () => {
    updateModelValue(editor.getHTML());
  },
});
```

<arrow v-click="[4, 5]" x1="300" y1="370" x2="230" y2="285" color="#564" width="2" arrowSize="1" />

<div v-click="[4, 5]" class="absolute bottom-18 left-45 shadow">

```ts 
extensions: initializeExtensions(
  {
    aiConfig: props.aiConfig,
  },
),
```

</div>

<div v-click="[6, 8]">
<div class="absolute bottom-23 left-20 shadow">

```ts 
const updateModelValue = debounce((value: string) => {
  const cleanedHtml = cleanHtml(value);
  model.value = editor.value.getHTML();
}, 650);
```

</div>
<div v-click=[7,8] class="absolute bottom-23 right-0 shadow">

```ts 
function cleanHtml(xmlString: string) {
  const documentFragment = document.createElement("template");
  documentFragment.innerHTML = xmlString;
  documentFragment.content
    .querySelectorAll("[js-client-only='true']")
    .forEach((el) => el.remove());

  return documentFragment.innerHTML;
}
```

</div>

</div>

<arrow v-click="[6, 8]" x1="200" y1="360" x2="150" y2="320" color="#564" width="2" arrowSize="1" />
<arrow v-click="[7, 8]" x1="520" y1="300" x2="300" y2="400" color="#564" width="2" arrowSize="1" />

---
transition: slide-up
---

# Initialize Extensions

```ts {all|2|2-6|10-13|14|15|7-9}
[
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3],
    },
  }),
  Commands.configure({
    suggestion: suggestions(),
  }),
  Placeholder.configure({
    emptyEditorClass: "v-editor-empty",
    placeholder: t("modules.rich_text_editor.placeholder"),
  }),
  Link.configure(),
  AiExtension.configure({ aiConfig }),
];

```

<arrow  v-click="[1,2]" x1="530" y1="130" x2="250" y2="130" color="#564" width="3" arrowSize="1" />
<div v-click="[1,2]"  class="absolute top-20 right-20 shadow bg-white rounded p-4 grid grid-cols-2 gap-8">

<div class="text-black">

## Nodes

- Blockquote
- BulletList
- CodeBlock
- Document
- HardBreak
- Heading
- HorizontalRule
- ListItem
- OrderedList
- Paragraph
- Text

</div>
<div class="text-black">

## Marks

- Bold
- Code
- Italic
- Strike

## Extensions

- Dropcursor
- Gapcursor
- History

</div>
</div>

<arrow  v-click="[2, 3]" x1="380" y1="130" x2="250" y2="160" color="#564" width="3" arrowSize="1" />
<video v-click="[2, 3]" class="absolute top-20 right-20" width="500" autoplay controls>
  <source src="/headline.mov" type="video/mp4">
</video>

<img v-click="[3, 4]" class="absolute top-60 right-20" src="/placeholder.png" width="300">

<div v-click="[4,5]" class="absolute top-50 right-20 shadow bg-white rounded p-4">

```ts
Link.configure({
  autolink: true, // default
  linkOnPaste: true, // default
  protocols: ["mailto"], // additional protocols - default: []
  openOnClick: true, // default
  HTMLAttributes: {
    rel: "noopener noreferrer",
    target: "_blank",
  },
}),
```

</div>

---
transition: slide-up
layout: image-right
image: "./floating_menu_4.png"
---

# Commands

```ts {all|7-14}
const suggestions = [
  // ...
  {
    title: t("modules.rich_text_editor.suggestions.h1"),
    slug: "h1",
    icon: "formatH1Outline",
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 1 })
        .run();
    },
  },
  // ...
]
```

---
transition: slide-up
layout: image-right
image: "./floating_menu_5.png"
---

# Commands

```ts {all|11}
const items = [
  // ...
  {
    title: t("modules.rich_text_editor.suggestions.ask_ai"),
    slug: "ai_chat_completion",
    icon: "autoAwesomeOutline",
    command: ({ editor, range }) => {
      editor
        .chain()
        .deleteRange(range)
        .setAiPromptActionCompletion()
        .run();
    },
  }
  // ...
]
```

---

# AI Extension

<div class="overflow-scroll h-90">

```ts
const AiExtension = Node.create<AiOptions>({
  // ...
  name: "ai",

  addAttributes() {
    return {
      "js-client-only": {
        default: "true",
      },
    };
  },

  addCommands() {
    return {
      setAiPromptActionCompletion:
        () =>
        ({ commands }) =>
          commands.insertContent({
            type: this.name,
            attrs: {
              endpoint: "https://api.openai.com/v1/chat/completions",
            },
          }),
    };
  },

  // ...
});
```

</div>

---

# NodeViewWrapper: Ai.vue

```html
<script setup lang="ts">
import { nodeViewProps, NodeViewWrapper } from "@tiptap/vue-3";

const props = defineProps(nodeViewProps);

console.log(props.node.attrs.endpoint); // "https://api.openai.com/v1/completions"
</script>

<template>
  <NodeViewWrapper>
    <!-- ... -->
  </NodeViewWrapper>
</template>
```
---

# Input Field

```html{1,3,7-17,19,21-25,27}{maxHeight:'340px'}
<script setup lang="ts">
import { nodeViewProps, NodeViewWrapper } from "@tiptap/vue-3";
import { ref } from "vue";

const props = defineProps(nodeViewProps);

const inputValue = ref("");
const responseText = ref("");

async function onSubmit() {
  const data = await fetch(props.node.attrs.endpoint, {
    method: "POST",
    body: JSON.stringify({ prompt: inputValue.value }),
  });
  responseText.value = data.text();
}
</script>

<template>
  <NodeViewWrapper>
    <form @submit.prevent="onSubmit">
      <label for="aiInput">Prompt</label>
      <input id="aiInput" v-model.trim="inputValue" />
    </form>
    <div v-if="responseText">{{ responseText }}</div>
  </NodeViewWrapper>
</template>
```

---

# Insert content and delete node


<div class="overflow-scroll h-100">

```html{1,18-29,31,38,40}{maxHeight:'340px'}
<script setup lang="ts">
import { nodeViewProps, NodeViewWrapper } from "@tiptap/vue-3";
import { ref } from "vue";

const props = defineProps(nodeViewProps);

const inputValue = ref("");
const responseText = ref("");

async function onSubmit() {
  const data = await fetch(props.node.attrs.endpoint, {
    method: "POST",
    body: JSON.stringify({ prompt: inputValue.value }),
  });
  responseText.value = data.text();
}

function insertAndDeleteNode() {
  // inserts AI content directly before this node
  props.editor
    .chain()
    .focus()
    .insertContentAt(props.editor.state.selection.$anchor.pos, responseText.value)
    .run();

  props.deleteNode();
  props.editor.commands.focus();
}
</script>

<template>
  <NodeViewWrapper>
    <form @submit.prevent="onSubmit">
      <label for="aiInput">Prompt</label>
      <input id="aiInput" v-model.trim="inputValue" />
    </form>
    <div v-if="responseText">{{ responseText }}</div>
    <button type="button" @click="insertAndDeleteNode">Insert!</button>
  </NodeViewWrapper>
</template>
```

</div>

---
transition: slide-up
---

# Demo

<video width="500" autoplay controls>
  <source src="/demo.mov" type="video/mp4">
</video>


---
transition: slide-left
---

# OpenAI

## Completion (Legacy)

Receives a simple prompt:

```
Translate the following English text to French: "{text}"
```

<p></p>

<div v-click>

## Chat Completion

Receives an array of messages:

```
[{"role": "user", "content": 'Translate the following English text to French: "{text}"'}]
```
</div>

<div v-click>

=> Nowadays, use the `Chat Completion` API which uses the newer models.

</div>

---
transition: slide-up
---

# OpenAI Models

|     | **Model families**   | **API Endpoint** |
| --- | --- | --- |
| Newer models (2023–) | gpt-4, gpt-3.5-turbo | https://api.openai.com/v1/chat/completions|
| Updated base models (2023) | babbage-002, davinci-002 | https://api.openai.com/v1/completions|
| Legacy models (2020–2022) | text-davinci-003, text-davinci-002, davinci, curie, babbage, ada | https://api.openai.com/v1/completions|


---
transition: slide-up
---

### Writing a prompt to translate text

<p class="mb-4"></p>

# Translate the following text into "language": "text"

---
transition: slide-up
---

### Writing a prompt to translate text

<p class="mb-4"></p>

# Translate the following text to "language" while keeping its punctuation including dashes, linguistic styles and tone. Translate the following text: "text"

---
transition: slide-up
---

### Writing a prompt to translate text

<p class="mb-4"></p>

# I will speak to you in any language and you will detect the language, and translate it to "language" while keeping its punctuation including dashes, linguistic styles and tone. Keep lists as lists. Don't start with the name or the language or other attributes. Translate the following text: "text"

---
transition: slide-up
---

### Writing a prompt to translate text

<p class="mb-4"></p>

# "text"

# Detect the language of the text above. Translate it to "language" while keeping its punctuation including dashes, linguistic styles and tone. Keep lists as lists. Don't start with the name or the language or other attributes.


---
transition: slide-left
---

# Token Limits

<img src="/tokenlimits.png" class="h-86">

---
transition: slide-up
---

# Tokenizer



<div class="mt-10">
<a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer">Open AI Tokenizer</a>
</div>

<div class="mt-10">

> ⚠️ The token limit includes the prompt (+ text) and the response!

</div>


---
transition: slide-left
---

# Prompt injection

> Prompt injection is the process of hijacking a language model's output.

<p></p>

<div v-click>

```
Translate the following English text to French: "{text}"
```

</div>

---
transition: slide-up
---

# Prompt injection

<img src="/prompt_injection.png" class="h-80">

<a href="https://gandalf.lakera.ai/" target="_blank" rel="noopener noreferrer" class="text-center">Gandalf Game</a>

---
class: text-center
---


Thanks

X: @vannsl ⭐️ Mastodon: @vanessa_otto@hachyderm.io ⭐️ LinkedIn: linkedin.com/in/otto-vanessa/


<img src="/feedback.jpg" class="h-80 mx-auto my-0">


