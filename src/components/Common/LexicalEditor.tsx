import { useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateNodesFromDOM, $generateHtmlFromNodes } from "@lexical/html";
import { $getRoot } from "lexical";

const theme = {
  // Define your editor theme here
};

const Placeholder = () => {
  return <div className="editor-placeholder">Enter some text...</div>;
};

const ImportHtmlPlugin = ({ htmlContent }: { htmlContent: string }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (htmlContent) {
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

const ExportHtmlPlugin = ({
  onExport,
}: {
  onExport: (html: string) => void;
}) => {
  const [editor] = useLexicalComposerContext();

  const exportHtml = () => {
    editor.update(() => {
      const htmlString = $generateHtmlFromNodes(editor, null);
      onExport(htmlString);
    });
  };

  return (
    <button
      onClick={exportHtml}
      className="export-button"
    >
      Export to HTML
    </button>
  );
};

const LexicalEditor = ({ initialHtml }: { initialHtml: string }) => {
  const [exportedHtml, setExportedHtml] = useState<string>("");

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError: (error: Error) => {
      console.error("Lexical Error:", error);
    },
  };

  return (
    <div className="editor-container">
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={({ children }) => <>{children}</>}
        />
        <HistoryPlugin />
        <ImportHtmlPlugin htmlContent={initialHtml} />
        <ExportHtmlPlugin onExport={setExportedHtml} />
      </LexicalComposer>
      {exportedHtml && (
        <div className="exported-html">
          <h2>Exported HTML:</h2>
          <div>{exportedHtml}</div>
        </div>
      )}
    </div>
  );
};

export default LexicalEditor;
