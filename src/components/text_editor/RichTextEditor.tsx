"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import theme from "../../constants/lexicalTheme";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useEffect, useState } from "react";
import { $generateHtmlFromNodes } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function Placeholder() {
  return (
    <div className="pointer-events-none absolute left-3 top-4 inline-block overflow-hidden text-ellipsis text-sm text-gray-600 dark:text-gray-100">
      Enter some rich text...
    </div>
  );
}

const editorConfig = {
  namespace: "Editor",
  theme,
  onError(error: any) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

export default function Editor() {
  const [editorState, setEditorState] = useState<string>();

  function onChange(editorState: any, editor: any, selection: any) {
    const editorStateJSON = editorState.toJSON();
    // console.log("Editor state changed!", JSON.stringify(editorStateJSON));
    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    setEditorState(JSON.stringify(editorStateJSON));
  }

  function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const htmlString = $generateHtmlFromNodes(editor, null);
          console.log(htmlString);
        });
      });
    }, [editor]);

    return null;
  }

  function onSave() {
    console.log("Editor state saved!", editorState);
  }

  return (
    <>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="relative mx-auto my-5 max-w-4xl rounded-sm rounded-tl-sm rounded-tr-sm text-left font-normal leading-5 text-black dark:text-white">
          <ToolbarPlugin />
          <div className="relative dark:bg-gray-700">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="relative min-h-[200px] resize-none space-x-1 px-2 py-4 text-sm caret-slate-200 outline-0" />
              }
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <OnChangePlugin onChange={onChange} />
            <MyCustomAutoFocusPlugin />
          </div>
        </div>
      </LexicalComposer>
      <button
        onClick={onSave}
        className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline"
      >
        Save
      </button>
    </>
  );
}
