import React from "react";
import { IonCol, IonRow } from "@ionic/react";

interface CenteredColumnProps {
  children: React.ReactNode;
}

const CenteredColumn: React.FC<CenteredColumnProps> = ({ children }) => {
  return (
    <IonRow>
      <IonCol
        size="10"
        offset="1"
        sizeMd="6"
        offsetMd="3"
        sizeLg="4"
        offsetLg="4"
      >
        {children}
      </IonCol>
    </IonRow>
  );
};

export default CenteredColumn;
