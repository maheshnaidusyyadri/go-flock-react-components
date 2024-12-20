import React from "react";
import { IonContent, IonPage } from "@ionic/react";

export type ImageEditorProps = {
  backgroundImageUlr: string;
  jsonConfig: string;

  saveImage: (imageAsString: string) => Promise<void>;
  exportJson: (jsonConfig: string) => Promise<void>;
};

const ImageEditorPresenter: React.FC<ImageEditorProps> = (props) => {
  return (
    <IonPage>
      <IonContent className="dashboard ion-padding-end ion-padding-start ion-padding-bottom">
        Image editor goes here {JSON.stringify(props)}
      </IonContent>
    </IonPage>
  );
};

export default ImageEditorPresenter;
