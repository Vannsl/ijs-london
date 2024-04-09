import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import Commands from "./commands";
import { suggestions } from "./suggestion";

export function initializeExtensions() {
  const tiptapExtensions = [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
    }),
    Commands.configure({
      suggestion: suggestions(),
    }),
    Focus.configure(),
    Placeholder.configure({
      emptyEditorClass: "v-editor-empty",
      placeholder: "Type '/' for commands",
    }),
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
    Underline.configure(),
  ];

  const bubbleMenu = [];
  const menu = document.querySelector(".menu");
  if (menu) {
    bubbleMenu.push(
      BubbleMenu.configure({
        element: menu as HTMLElement,
      })
    );
  }

  return [...tiptapExtensions, ...bubbleMenu];
}
