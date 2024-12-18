import React, { useRef } from "react";
import "./EventListPresenter.scss";
import {
  IonPage,
  IonGrid,
  IonContent,
  IonCol,
  IonRow,
  IonFooter,
  IonButton,
  IonModal,
} from "@ionic/react";
import { EventListProps } from "@goflock/types/src/index";
import EventItem from "../Common/Events/EventItem";
import Header from "../Header/Header";
import NoEvent from "../Common/Events/NoEvent";

const EventListPresenter: React.FC<EventListProps> = ({
  // profile,
  events,
  openEvent,
}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <Header
        title=""
        showLogo={false}
        showContactList={false}
        showGoBack={true}
        showProfile={false}
      />
      <IonContent className="ion-padding">
        {/* <IonLabel className="event-name">{profile.prefName}'s Events</IonLabel> */}
        <IonGrid className="ion-no-padding ion-no-margin">
          {events.length === 0 ? (
            <NoEvent />
          ) : (
            <IonRow className="event-row">
              {events.map((event) => (
                <IonCol size="6" className="event-col">
                  <EventItem
                    key={event.id}
                    event={event}
                    onOpen={openEvent}
                    onShowActionSheet={() => {}}
                  />
                </IonCol>
              ))}
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-padding">
        <IonButton
          shape="round"
          size="large"
          id="open-modal"
          expand="block"
          className="primary-btn rounded"
        >
          Create new event
        </IonButton>
      </IonFooter>
      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={0.6}
        breakpoints={[0, 0.6, 0.75]}
        className="action-moadal ion-padding-top"
      >
        {/* <EventTypeSelection /> */}
      </IonModal>
    </IonPage>
  );
};

export default EventListPresenter;
