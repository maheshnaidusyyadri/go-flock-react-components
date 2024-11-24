import { default as React } from 'react';
interface LexicalEditorProps {
    initialHtml: string;
    onExport: (exportedHtml: string) => void;
}
declare const LexicalEditor: React.FC<LexicalEditorProps>;
export default LexicalEditor;
