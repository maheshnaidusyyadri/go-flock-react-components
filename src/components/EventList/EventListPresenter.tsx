import React from "react";
import "./EventListPresenter.scss";
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonPage,
  IonGrid,
} from "@ionic/react";
import { EventListProps } from "@goflock/types/src/index";
import EventItem from "../Common/Events/EventItem";
import Header from "../Header/Header";

const EventListPresenter: React.FC<EventListProps> = ({
  profile,
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

      <IonGrid className="events_sec">
        <IonCardHeader className="events_head">
          <IonCardTitle className="events_title">
            {profile.prefName}'s Events
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="events_cnt">
          {events.length === 0 ? (
            <p>No events to display.</p>
          ) : (
            <IonList className="ion-list">
              {events.map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  onOpen={openEvent}
                  onShowActionSheet={() => {}}
                />
              ))}
            </IonList>
          )}
        </IonCardContent>
      </IonGrid>
    </IonPage>
  );
};

export default EventListPresenter;
