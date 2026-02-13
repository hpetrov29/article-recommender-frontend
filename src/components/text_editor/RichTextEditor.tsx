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
    console.log("Editor state changed!", JSON.stringify(editorStateJSON));
    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    setEditorState(JSON.stringify(editorStateJSON));
  }

  function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const htmlString = $generateHtmlFromNodes(editor, null);
          //console.log(htmlString);
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
        <div className="mx-auto flex-col items-center rounded-sm rounded-tl-sm rounded-tr-sm text-left font-normal leading-5 text-black dark:text-white">
          <div className="fixed left-0 right-0 top-0 z-20 ml-[4.5rem] flex h-[4.5rem] transform items-center justify-between bg-[#ffffff] px-2 py-4 shadow">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={onSave}
            >
              Save
            </button>
            <ToolbarPlugin />
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={onSave}
            >
              Publish
            </button>
          </div>
          <div className="mt-24 flex items-center justify-center px-8">
            <div className="relative mx-auto w-full max-w-[70rem]">
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="min-h-[200px] w-full resize-none bg-white px-2 py-4 text-sm caret-black caret-slate-200 outline-none" />
                }
                placeholder={<Placeholder />}
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>
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
    </>
  );
}
