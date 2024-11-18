// src/components/DashboardPresenter.tsx

import React, { useEffect, useState } from "react";
import "./DashboardPresenter.scss";
import {
  IonContent,
  IonActionSheet,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { DashboardProps } from "@goflock/types/src/index";
// import AddIcon from "../../images/icons/add-circle.svg";
// import vacationIcon from "../../images/icons/vacation.svg";
// import birthdayIcon from "../../images/icons/birthday.svg";
// import marriageIcon from "../../images/icons/marriage.svg";
// import graduationIcon from "../../images/icons/graduation.svg";
// import moreIcon from "../../images/icons/more.svg";
import EventSection from "../Common/Events/EventSection";
import Header from "../Header/Header";

const DashboardPresenter: React.FC<DashboardProps> = ({
  // profile,
  activeEvents,
  myEvents,
  // createNewEvent,
  openEvent,
  // seeAllMyEvents,
  // seeAllEvents,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "AllEvents" | "MyEvents"
  >("AllEvents");
  const [showFirstActionSheet, setShowFirstActionSheet] = useState(false);
  const [showDeleteActionSheet, setShowDeleteActionSheet] = useState(false);

  useEffect(() => {
    console.log("DashboardPresenter mounted");
  }, []);

  return (
    <IonPage>
      <Header
        showGoBack={false}
        showLogo={true}
        title={""}
        showProfile={true}
      />
      <IonContent className="dashboard ion-padding">
        {/* <IonCard className="db_profile">
          <IonCardHeader className="db_profile_head">
            <IonAvatar slot="start">
              <IonImg src={profile?.pictureUrl} alt="Profile" />
            </IonAvatar>
            <IonCardTitle className="profile-name">
              Welcome, {profile.prefName}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="db_profile_text">
            {profile.isIntroShown ? (
              <IonText className="profile_text">
                Your preferences are set! Check out the latest events below.
              </IonText>
            ) : (
              <IonText className="profile_text">
                Welcome! Let's get started by setting up your preferences.
              </IonText>
            )}
          </IonCardContent>
        </IonCard> */}
        <IonSegment
          className="segment_tabs"
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
        {/* Active Events Section */}

        {/* Event Categories Section */}
        {/* <IonCard className="events_sec">
          <IonCardHeader className="events_head">
            <IonCardTitle className="events_title">All Events</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="events_cnt">
            <IonRow className="event_actions">
              <IonCol
                size="4"
                className="icon-col"
              >
                <IonCard
                  className="icon-card create"
                  onClick={createNewEvent}
                >
                  <IonThumbnail className="icon-thumb">
                    <IonImg src={AddIcon}></IonImg>
                  </IonThumbnail>
                </IonCard>
                <IonText className="card-title">Add events</IonText>
              </IonCol>
              <IonCol
                size="4"
                className="icon-col"
              >
                <IonCard className="icon-card">
                  <IonThumbnail className="icon-thumb">
                    <IonImg src={birthdayIcon}></IonImg>
                  </IonThumbnail>
                </IonCard>
                <IonText className="card-title">Birthdays</IonText>
              </IonCol>
              <IonCol
                size="4"
                className="icon-col"
              >
                <IonCard className="icon-card">
                  <IonThumbnail className="icon-thumb">
                    <IonImg src={vacationIcon}></IonImg>
                  </IonThumbnail>
                </IonCard>
                <IonText className="card-title">Vacation trips</IonText>
              </IonCol>
              <IonCol
                size="4"
                className="icon-col"
              >
                <IonCard className="icon-card">
                  <IonThumbnail className="icon-thumb">
                    <IonImg src={marriageIcon}></IonImg>
                  </IonThumbnail>
                </IonCard>
                <IonText className="card-title">Marriage</IonText>
              </IonCol>
              <IonCol
                size="4"
                className="icon-col"
              >
                <IonCard className="icon-card">
                  <IonThumbnail className="icon-thumb">
                    <IonImg src={graduationIcon}></IonImg>
                  </IonThumbnail>
                </IonCard>
                <IonText className="card-title">Graduation</IonText>
              </IonCol>
              <IonCol
                size="4"
                className="icon-col"
              >
                <IonCard className="icon-card">
                  <IonThumbnail className="icon-thumb">
                    <IonImg src={moreIcon}></IonImg>
                  </IonThumbnail>
                </IonCard>
                <IonText className="card-title">Others</IonText>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard> */}

        {/* Action Sheets */}
        <IonActionSheet
          isOpen={showFirstActionSheet}
          onDidDismiss={() => setShowFirstActionSheet(false)}
          buttons={[
            {
              text: "Copy link",
              role: "destructive",
              data: { action: "delete" },
            },
            { text: "Edit Event", data: { action: "edit" } },
            { text: "Add Checklist", data: { action: "checklist" } },
            {
              text: "Delete Event",
              role: "destructive",
              data: { action: "delete" },
              handler: () => {
                setShowFirstActionSheet(false);
                setShowDeleteActionSheet(true);
              },
            },
          ]}
        />
        <IonActionSheet
          isOpen={showDeleteActionSheet}
          onDidDismiss={() => setShowDeleteActionSheet(false)}
          buttons={[
            {
              text: "Delete Event",
              role: "destructive",
              data: { action: "delete" },
              cssClass: "fill-btn",
            },
            { text: "Cancel", data: { action: "cancel" }, cssClass: "rounded" },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default DashboardPresenter;
