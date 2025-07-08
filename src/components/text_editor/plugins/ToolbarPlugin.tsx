"use client";
import React from "react";
import clsx from "clsx";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { mergeRegister } from "@lexical/utils";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection();
    console.log("selection", selection);
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
      setIsUnderline(selection.hasFormat("underline"));
    }
  }, [editor]);

  React.useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
    );
  }, [updateToolbar, editor]);

  return (
    <div className="fixed bottom-8 left-1/2 z-20 mb-4 flex h-10 min-w-52 -translate-x-1/2 transform items-center space-x-2 bg-[#1b2733] px-2 py-2 shadow">
      <button
        className={clsx(
          "px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
          isBold ? "bg-gray-700" : "bg-transparent",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
      >
        B
      </button>
      <button
        className={clsx(
          "px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
          isStrikethrough ? "bg-gray-700" : "bg-transparent",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        }}
      >
        S
      </button>
      <button
        className={clsx(
          "px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
          isItalic ? "bg-gray-700" : "bg-transparent",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        I
      </button>
      <button
        className={clsx(
          "px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
          isUnderline ? "bg-gray-700" : "bg-transparent",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
      >
        U
      </button>

      <span className="block h-full w-[1px] bg-gray-600"></span>

      <button
        className={clsx(
          "bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        }}
      >
        L
      </button>
      <button
        className={clsx(
          "bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        }}
      >
        C
      </button>
      <button
        className={clsx(
          "bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        }}
      >
        R
      </button>
      <button
        className={clsx(
          "bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
        }}
      >
        J
      </button>

      <span className="block h-full w-[1px] bg-gray-600"></span>

      <button
        className={clsx(
          "bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
        )}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
      >
        Undo
      </button>
      <button
        className={clsx(
          "bg-transparent px-1 transition-colors duration-100 ease-in hover:bg-gray-700",
        )}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
      >
        Redo
      </button>
    </div>
  );
}
