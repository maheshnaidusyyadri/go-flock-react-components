import React, { useRef } from "react";
import {
  IonCol,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonButton,
  IonModal,
  IonContent,
} from "@ionic/react";
import Header from "../Header/Header";

import Noevent from "../../images/Noevent.svg";
import EventType from "../Common/EventType";

const NoEvent: React.FC = ({}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const viewportHeight = window.innerHeight;
  const initialBreakpointValue = 400 / viewportHeight; // For a 300px initial height
  return (
    <>
      <IonPage>
        <Header
          title=""
          showGoBack={false}
          showLogo={true}
          showMenu={false}
          showContactList={false}
          showProfile={true}
        />
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonImg src={Noevent} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center no-event-sec">
                <h2 className="ion-text-center">
                  Planning a party with friends?
                </h2>
                <p className="ion-text-center">
                  Here's a small text description for the content. Nothing more,
                  nothing less.
                </p>
                <IonButton
                  color="primary"
                  shape="round"
                  size="large"
                  id="open-modal"
                >
                  Create Event
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>

      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={initialBreakpointValue}
        className="action-moadal ion-padding-top"
      >
        <EventType />
      </IonModal>
    </>
  );
};

export default NoEvent;
