import React from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonContent,
  IonImg,
  IonCard,
} from "@ionic/react";
import settingsIcon from "../../images/icons/settingsCircle.svg";
import quickSetupIcon from "../../images/icons/quickSetup.svg";
import detailSetupIcon from "../../images/icons/detailSetup.svg";

const EventType: React.FC = ({}) => {
  return (
    <>
      <IonContent className="ion-padding ">
        <IonGrid className="ion-no-margin ion-no-padding action-line">
          <IonRow>
            <IonCol className="actions-head ion-padding-bottom">
              <IonImg className="action-icon" src={settingsIcon} />
              <h3 className="ion-text-center action-title">Create Event</h3>
              <p className="ion-text-center action-subtitle">
                Select quick or detailed event setup
              </p>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonCol className="ion-text-center ">
              <IonCard className="ion-padding event-type">
                <IonImg className="type-icon" src={detailSetupIcon} />
                <h2>Detailed setup</h2>
                <p>
                  (Create a fully customized event with complete control over
                  every detail.)
                </p>
              </IonCard>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonCard className="ion-padding event-type">
                <IonImg className="type-icon" src={quickSetupIcon} />
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
