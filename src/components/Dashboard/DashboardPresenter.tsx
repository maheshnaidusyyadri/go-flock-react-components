import React, { useState, useRef } from "react";
import "./DashboardPresenter.scss";
import {
  IonContent,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonFooter,
  IonButton,
  IonModal,
} from "@ionic/react";
import { DashboardProps } from "@goflock/types/src/index";
import EventSection from "../Common/Events/EventSection";
import Header from "../Header/Header";
import EventTypeSelection from "../Common/Events/EventTypeSelection";

const DashboardPresenter: React.FC<DashboardProps> = ({
  profile,
  activeEvents,
  myEvents,
  createNewEvent,
  openEvent,
  // seeAllMyEvents,
  // seeAllEvents,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "AllEvents" | "MyEvents"
  >("AllEvents");

  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonPage>
      <Header
        showGoBack={false}
        showLogo={true}
        title={""}
        showProfile={true}
        profile={profile}
      />
      <IonContent className="dashboard ion-padding-end ion-padding-start ion-padding-bottom">
        <IonSegment
          className="segment-tabs"
          value={selectedSegment}
          onIonChange={(e) =>
            setSelectedSegment(e.detail.value as "AllEvents" | "MyEvents")
          }
        >
          <IonSegmentButton value="AllEvents">
            <IonLabel>All events</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="MyEvents">
            <IonLabel>My events</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {selectedSegment === "AllEvents" && (
          <EventSection
            title=""
            events={activeEvents}
            //onSeeAll={() => seeAllEvents("guest")}
            onOpenEvent={openEvent}
          />
        )}

        {selectedSegment === "MyEvents" && (
          <EventSection
            title=""
            events={myEvents}
            //  onSeeAll={seeAllMyEvents}
            onOpenEvent={openEvent}
          />
        )}
      </IonContent>
      <IonFooter className="ion-padding">
        <IonButton
          className="primary-btn"
          shape="round"
          size="large"
          id="open-modal"
          expand="block"
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
        <EventTypeSelection createNewEvent={createNewEvent} />
        <IonLabel className="overlay"></IonLabel>
      </IonModal>
    </IonPage>
  );
};

export default DashboardPresenter;
