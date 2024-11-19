import React from "react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

import Noevent from "../Icons/TravelPeople";
const NoEvent: React.FC = ({}) => {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>
            <Noevent />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center no-event-sec">
            <h2 className="ion-text-center">Planning a party with friends?</h2>
            <p className="ion-text-center">
              Create an event and share with your friends in an easy and simple
              way
            </p>
            {/* <IonButton
              color="primary"
              shape="round"
              size="large"
              id="open-modal"
            >
              Create Event
            </IonButton> */}
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default NoEvent;
