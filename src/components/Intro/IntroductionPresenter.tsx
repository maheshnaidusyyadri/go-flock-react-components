import React from "react";
import { IonContent, IonButton } from "@ionic/react";
import { IntroductionProps } from "@goflock/types/src/index";

const IntroductionPresenter: React.FC<IntroductionProps> = ({
  introCompleted,
}) => {
  return (
    <IonContent>
      <h2>Ready to Go!</h2>
      <p>You are now ready to use the app.</p>
      <IonButton
        expand="full"
        onClick={introCompleted}
      >
        Get Started
      </IonButton>
    </IonContent>
  );
};

export default IntroductionPresenter;