"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import "@mdxeditor/editor/style.css";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CodeToggle,
  CreateLink,
  InsertAdmonition,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  frontmatterPlugin,
  codeMirrorPlugin,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  diffSourcePlugin,
  InsertCodeBlock,
  codeBlockPlugin,
  DiffSourceToggleWrapper,
  ListsToggle,
} from "@mdxeditor/editor";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <div className="">
      <MDXEditor
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle></ListsToggle>
                <BlockTypeSelect></BlockTypeSelect>
                <CodeToggle></CodeToggle>
                <CreateLink></CreateLink>
                <InsertAdmonition></InsertAdmonition>
                {/* <InsertFrontmatter></InsertFrontmatter> */}
                <InsertImage></InsertImage>
                <InsertCodeBlock></InsertCodeBlock>
                <InsertTable></InsertTable>
                <InsertThematicBreak></InsertThematicBreak>
                <DiffSourceToggleWrapper>
                  <></>
                </DiffSourceToggleWrapper>
              </>
            ),
          }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              css: "CSS",
              html: "HTML",
              ts: "TypeScript",
              json: "JSON",
              sh: "Shell",
              python: "Python",
              go: "Go",
            },
          }),
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          diffSourcePlugin({
            diffMarkdown: "boo",
            viewMode: "rich-text",
          }),
          markdownShortcutPlugin(),
        ]}
        {...props}
        ref={editorRef}
      />
    </div>
  );
}
