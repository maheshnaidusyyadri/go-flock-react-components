import { default as React } from 'react';
export type ImageEditorProps = {
    backgroundImageUlr: string;
    jsonConfig: string;
    saveImage: (imageAsString: string) => Promise<void>;
    exportJson: (jsonConfig: string) => Promise<void>;
};
declare const ImageEditorPresenter: React.FC<ImageEditorProps>;
export default ImageEditorPresenter;
