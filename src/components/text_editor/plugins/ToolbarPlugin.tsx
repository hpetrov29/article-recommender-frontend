"use client";
import React from "react";
import type { LexicalCommand, CommandPayloadType } from "lexical";

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
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  Undo,
  Redo,
} from "lucide-react";

type ToolItem<T extends LexicalCommand<unknown>> = {
  cmd: T;
  label: CommandPayloadType<T>;
  icon: React.ComponentType<{ className?: string }>;
  selected: boolean;
};

type AnyToolItem =
  | ToolItem<typeof FORMAT_TEXT_COMMAND>
  | ToolItem<typeof FORMAT_ELEMENT_COMMAND>
  | ToolItem<typeof UNDO_COMMAND>;

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);

  const toolItems: AnyToolItem[] = [
    { cmd: FORMAT_TEXT_COMMAND, label: "bold", icon: Bold, selected: isBold },
    {
      cmd: FORMAT_TEXT_COMMAND,
      label: "italic",
      icon: Italic,
      selected: isItalic,
    },
    {
      cmd: FORMAT_TEXT_COMMAND,
      label: "strikethrough",
      icon: Strikethrough,
      selected: isStrikethrough,
    },
    {
      cmd: FORMAT_TEXT_COMMAND,
      label: "underline",
      icon: Underline,
      selected: isUnderline,
    },
    {
      cmd: FORMAT_ELEMENT_COMMAND,
      label: "left",
      icon: AlignLeft,
      selected: false,
    },
    {
      cmd: FORMAT_ELEMENT_COMMAND,
      label: "center",
      icon: AlignCenter,
      selected: false,
    },
    {
      cmd: FORMAT_ELEMENT_COMMAND,
      label: "right",
      icon: AlignRight,
      selected: false,
    },
    {
      cmd: FORMAT_ELEMENT_COMMAND,
      label: "justify",
      icon: AlignJustify,
      selected: false,
    },
    { cmd: UNDO_COMMAND, label: undefined, icon: Undo, selected: false },
    { cmd: REDO_COMMAND, label: undefined, icon: Redo, selected: false },
  ];

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection();

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
    <div className="flex items-center px-2 py-4">
      {toolItems.map((item, i) => (
        <div key={i} className="flex items-center">
          <button
            className={clsx(
              "group px-1 transition-colors duration-100 ease-in",
            )}
            onClick={() => {
              editor.dispatchCommand(item.cmd, item.label);
            }}
          >
            <item.icon
              className={clsx(
                "h-5 w-5 stroke-black stroke-[2] transition-colors duration-150 ease-in-out group-hover:stroke-blue-500",
                item.selected && "stroke-blue-500",
              )}
            />
          </button>
          {(i + 1) % 4 === 0 && i !== 0 && (
            <div className="mx-2 h-6 w-[1px] bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
}
