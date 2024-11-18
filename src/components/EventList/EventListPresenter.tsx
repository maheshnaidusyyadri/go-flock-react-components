import React from "react";
import "./EventListPresenter.scss";
import { IonPage, IonGrid, IonContent, IonCol, IonRow } from "@ionic/react";
import { EventListProps } from "@goflock/types/src/index";
import EventItem from "../Common/Events/EventItem";
import Header from "../Header/Header";

const EventListPresenter: React.FC<EventListProps> = ({
  // profile,
  events,
  openEvent,
}) => {
  return (
    <IonPage>
      <Header
        title=""
        showLogo={false}
        showContactList={false}
        showGoBack={true}
        showProfile={true}
      />
      <IonContent className="ion-padding">
        {/* <IonLabel className="event-name">{profile.prefName}'s Events</IonLabel> */}
        <IonGrid className="events_sec ion-no-padding ion-no-margin">
          {events.length === 0 ? (
            <p>No events to display.</p>
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
    </IonPage>
  );
};

export default EventListPresenter;
