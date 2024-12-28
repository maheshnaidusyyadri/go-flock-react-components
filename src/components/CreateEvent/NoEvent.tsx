import React, { useRef } from "react";
import {
  IonCol,
  IonGrid,
  IonPage,
  IonRow,
  IonButton,
  IonModal,
  IonContent,
  IonFooter,
} from "@ionic/react";
import Header from "../Header/Header";

import EventType from "../Common/EventType";
import Noevent from "../Common/Icons/NoEventIcon";
import CenteredColumn from "../Common/CenteredColumn";

const NoEvent: React.FC = ({}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const viewportHeight = window.innerHeight;
  const initialBreakpointValue = 400 / viewportHeight; // For a 300px initial height
  const CreateEventButton = (
    <CenteredColumn>
      <IonButton
        className="primary-btn"
        shape="round"
        size="large"
        id="open-modal"
        expand="block"
      >
        Create Event
      </IonButton>
    </CenteredColumn>
  );

  return (
    <>
      <IonPage>
        <Header
          title=""
          showGoBack={false}
          showLogo={true}
          showMenu={false}
          showContactList={false}
          showProfile={false}
        />
        <IonContent className="ion-padding">
          <IonGrid>
            <CenteredColumn>
              <IonRow>
                <IonCol>
                  <Noevent />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center no-event-sec">
                  <h2 className="ion-text-center">
                    Planning a party with friends?
                  </h2>
                  <p className="ion-text-center">
                    Here's a small text description for the content. Nothing
                    more, nothing less.
                  </p>
                </IonCol>
              </IonRow>
            </CenteredColumn>
            <div className="ion-hide-md-down ion-padding-top">
              {CreateEventButton}
            </div>
          </IonGrid>
        </IonContent>
        <IonFooter className="ion-padding ion-hide-md-up">
          {CreateEventButton}
        </IonFooter>
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
