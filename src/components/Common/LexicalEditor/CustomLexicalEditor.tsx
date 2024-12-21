import React, { useEffect } from "react";
import { IonButton, IonToolbar } from "@ionic/react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateNodesFromDOM, $generateHtmlFromNodes } from "@lexical/html";
import {
  $getRoot,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
} from "lexical";
import {
  AlignLeft,
  AlignRight,
  AlignVertically,
  TextBold,
  TextItalic,
} from "iconsax-react";

import "./CustomLexicalEditor.css";

interface LexicalEditorProps {
  initialHtml: string;
  onExport: (exportedHtml: string) => void;
}

const theme = {};

const Placeholder = () => (
  <div className="editor-placeholder">
    Generating the invitation description.
  </div>
);

const Toolbar: React.FC = () => {
  const [editor] = useLexicalComposerContext();

  const formatText = (format: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const formatElement = (format: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format);
  };

  return (
    <IonToolbar>
      <IonButton
        onClick={() => formatText("bold")}
        fill="clear"
      >
        <TextBold
          size="32"
          color="#000000"
          variant="Bold"
        />
      </IonButton>
      <IonButton
        onClick={() => formatText("italic")}
        fill="clear"
      >
        <TextItalic
          size="32"
          color="#000000"
          variant="Bold"
        />
      </IonButton>
      <IonButton
        onClick={() => formatElement("left")}
        fill="clear"
      >
        <AlignLeft
          size="32"
          color="#000000"
          variant="Bold"
        />
      </IonButton>
      <IonButton
        onClick={() => formatElement("center")}
        fill="clear"
      >
        <AlignVertically
          size="32"
          color="#000000"
          variant="Bold"
        />
      </IonButton>
      <IonButton
        onClick={() => formatElement("right")}
        fill="clear"
      >
        <AlignRight
          size="32"
          color="#000000"
          variant="Bold"
        />
      </IonButton>
    </IonToolbar>
  );
};

const ImportHtmlPlugin = ({ htmlContent }: { htmlContent: string }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (htmlContent) {
      console.log(htmlContent);

      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(htmlContent, "text/html");
        const nodes = $generateNodesFromDOM(editor, dom);
        const root = $getRoot();
        root.clear();
        root.append(...nodes);
      });
    }
  }, [editor, htmlContent]);

  return null;
};

const RealtimeExportPlugin = ({
  onExport,
}: {
  onExport: (exportedHtml: string) => void;
}) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const removeListener = editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const exportedHtml = $generateHtmlFromNodes(editor, null);
        onExport(exportedHtml);
      });
    });

    return () => {
      removeListener();
    };
  }, [editor, onExport]);

  return null;
};

const LexicalEditor: React.FC<LexicalEditorProps> = ({
  initialHtml,
  onExport,
}) => {
  const initialConfig = {
    namespace: "Invitoz AI editor",
    theme,
    onError: (error: Error) => console.error("Lexical Error:", error),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={({ children }) => <>{children}</>}
        />
        <HistoryPlugin />
        <ImportHtmlPlugin htmlContent={initialHtml} />
        <RealtimeExportPlugin onExport={onExport} />
      </div>
    </LexicalComposer>
  );
};

export default LexicalEditor;
