import React from "react";
import { IonCol, IonGrid, IonRow, IonContent, IonCard } from "@ionic/react";

import SettingsCircle from "./Icons/SettingsCircle";
import QuickSetup from "./Icons/QuickSetup";
import Detail from "./Icons/Detail";

const EventType: React.FC = ({}) => {
  return (
    <>
      <IonContent className="ion-padding ">
        <IonGrid className="ion-no-margin ion-no-padding action-line">
          <IonRow>
            <IonCol className="actions-head ion-padding-bottom">
              <SettingsCircle />
              <h3 className="ion-text-center action-title">Create Event</h3>
              <p className="ion-text-center action-subtitle">
                Select quick or detailed event setup
              </p>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonCol className="ion-text-center ">
              <IonCard className="ion-padding event-type">
                <Detail />
                <h2>Detailed setup</h2>
                <p>
                  (Create a fully customized event with complete control over
                  every detail.)
                </p>
              </IonCard>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonCard className="ion-padding event-type">
                <QuickSetup />
                <h2>Quick setup</h2>
                <p>(Set up your event instantly with simple, fast options.)</p>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default EventType;
