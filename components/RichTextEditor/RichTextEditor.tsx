// components/RichTextEditor.tsx

"use client";

import React, { useLayoutEffect, useState } from "react";
import { type Editor, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { Placeholder } from "@tiptap/extensions";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Highlighter,
  List,
  ListOrdered,
} from "lucide-react";
import { BulletList, OrderedList } from "@tiptap/extension-list";

// --- TYPE DEFINITIONS ---
interface MenuBarProps {
  editor: Editor | null;
}

interface RichTextEditorProps {
  content: string;
  onChange: (newContent: string) => void;
}

// A simple hook to force a component to re-render
const useForceUpdate = () => {
  const [, setValue] = useState(0);
  return () => setValue((value) => value + 1);
};

// --- THE FIXED MENU BAR COMPONENT ---
const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  const forceUpdate = useForceUpdate();

  // THE FIX: Listen to Tiptap's 'transaction' event and force a re-render.
  // We use useLayoutEffect to prevent a flash of un-styled content.
  useLayoutEffect(() => {
    if (editor) {
      editor.on("transaction", () => {
        forceUpdate();
      });
    }
    // Clean up the event listener when the component unmounts
    return () => {
      if (editor) {
        editor.off("transaction");
      }
    };
  }, [editor, forceUpdate]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-t-lg p-1 bg-card flex flex-wrap items-center gap-1">
      {/* Basic Text Formatting */}
      <ToggleGroup type="multiple">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Toggle italic"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          aria-label="Toggle strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("highlight")}
          onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
          aria-label="Toggle highlight"
        >
          <Highlighter className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>

      <Separator orientation="vertical" className="h-8 mx-1 bg-border" />

      {/* Headings */}
      <ToggleGroup
        type="single"
        value={
          editor.isActive("heading", { level: 1 })
            ? "h1"
            : editor.isActive("heading", { level: 2 })
            ? "h2"
            : editor.isActive("heading", { level: 3 })
            ? "h3"
            : ""
        }
        onValueChange={(value: string) => {
          if (!value) {
            editor.chain().focus().setParagraph().run();
            return;
          }
          const level = parseInt(value.slice(1)) as 1 | 2 | 3;
          editor.chain().focus().setHeading({ level }).run();
        }}
      >
        <ToggleGroupItem value="h1" aria-label="Toggle Heading 1">
          <Heading1 className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="h2" aria-label="Toggle Heading 2">
          <Heading2 className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="h3" aria-label="Toggle Heading 3">
          <Heading3 className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <Separator orientation="vertical" className="h-8 mx-1 bg-border" />

      {/* Text Alignment */}
      <ToggleGroup
        type="single"
        value={
          editor.isActive({ textAlign: "center" })
            ? "center"
            : editor.isActive({ textAlign: "right" })
            ? "right"
            : editor.isActive({ textAlign: "justify" })
            ? "justify"
            : "left"
        }
        onValueChange={(
          value: "left" | "center" | "right" | "justify" | ""
        ) => {
          if (value) editor.chain().focus().setTextAlign(value).run();
        }}
      >
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Align justify">
          <AlignJustify className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <Separator orientation="vertical" className="h-8 mx-1 bg-border" />

      {/* --- ADDED LIST BUTTONS HERE --- */}
      <ToggleGroup type="multiple">
        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          aria-label="Toggle Bullet List"
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          aria-label="Toggle Ordered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>

      <Separator orientation="vertical" className="h-8 mx-1 bg-border" />
    </div>
  );
};

// --- THE MAIN RICH TEXT EDITOR COMPONENT (No changes needed here) ---
export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      BulletList,
      OrderedList,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start writing your amazing post here…",
      }),
    ],
    content: content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base focus:outline-none p-4",
      },
    },
    onUpdate({ editor }: { editor: Editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-lg">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-[20rem]" />
    </div>
  );
};
