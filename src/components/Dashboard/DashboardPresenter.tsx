// src/components/DashboardPresenter.tsx

import React, { useState } from "react";
import "./DashboardPresenter.scss";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonContent,
  IonActionSheet,
  IonCol,
  IonThumbnail,
  IonImg,
  IonText,
  IonRow,
} from "@ionic/react";
import { DashboardProps } from "@goflock/types/src/index";
import AddIcon from "../../images/icons/add-circle.svg";
import vacationIcon from "../../images/icons/vacation.svg";
import birthdayIcon from "../../images/icons/birthday.svg";
import marriageIcon from "../../images/icons/marriage.svg";
import graduationIcon from "../../images/icons/graduation.svg";
import moreIcon from "../../images/icons/more.svg";
import EventSection from "../common/EventSection";

const DashboardPresenter: React.FC<DashboardProps> = ({
  profile,
  activeEvents,
  myEvents,
  createNewEvent,
  openEvent,
  seeAllMyEvents,
  seeAllEvents,
}) => {
  const [showFirstActionSheet, setShowFirstActionSheet] = useState(false);
  const [showDeleteActionSheet, setShowDeleteActionSheet] = useState(false);

  return (
    <IonContent className="dashboard">
      {/* Profile Section */}
      <IonCard className="db_profile">
        <IonCardHeader className="db_profile_head">
          <IonAvatar slot="start">
            <IonImg
              src={profile.pictureUrl}
              alt="Profile"
            />
          </IonAvatar>
          <IonCardTitle className="profile-name">
            Welcome, {profile.prefName}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="db_profile_text">
          {profile.isIntroShown ? (
            <IonText className="profile_text">Your preferences are set! Check out the latest events below.</IonText>
          ) : (
            <IonText className="profile_text">Welcome! Let's get started by setting up your preferences.</IonText>
          )}
        </IonCardContent>
      </IonCard>

      {/* Active Events Section */}
      <EventSection
        title="Active Events"
        events={activeEvents}
        onSeeAll={() => seeAllEvents("guest")}
        onOpenEvent={openEvent}
      />

      {/* Event Categories Section */}
      <IonCard className="events_sec">
        <IonCardHeader className="events_head">
          <IonCardTitle className="events_title">All Events</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="events_cnt">           
          <IonRow className="event_actions">
            <IonCol size="4" className="icon-col">
              <IonCard className="icon-card create">
                <IonThumbnail className="icon-thumb">
                  <IonImg src={AddIcon}></IonImg>
                </IonThumbnail>
              </IonCard>
              <IonText className="card-title">Add events</IonText>
            </IonCol>
            <IonCol size="4" className="icon-col">
              <IonCard className="icon-card">
                <IonThumbnail className="icon-thumb">
                  <IonImg src={birthdayIcon}></IonImg>
                </IonThumbnail>
              </IonCard>
              <IonText className="card-title">Birthdays</IonText>
            </IonCol>
            <IonCol size="4" className="icon-col">
              <IonCard className="icon-card">
                <IonThumbnail className="icon-thumb">
                  <IonImg src={vacationIcon}></IonImg>
                </IonThumbnail>                  
              </IonCard>
              <IonText className="card-title">Vacation trips</IonText>
            </IonCol>
            <IonCol size="4" className="icon-col">
              <IonCard className="icon-card">
                <IonThumbnail className="icon-thumb">
                  <IonImg src={marriageIcon}></IonImg>
                </IonThumbnail>                  
              </IonCard>
              <IonText className="card-title">Marriage</IonText>
            </IonCol>
            <IonCol size="4" className="icon-col">
              <IonCard className="icon-card">
              <IonThumbnail className="icon-thumb">
                <IonImg src={graduationIcon}></IonImg>
              </IonThumbnail>
              </IonCard>
              <IonText className="card-title">Graduation</IonText>
            </IonCol>
            <IonCol size="4" className="icon-col">
              <IonCard className="icon-card">
                <IonThumbnail className="icon-thumb">
                  <IonImg src={moreIcon}></IonImg>
                </IonThumbnail>                  
              </IonCard>
              <IonText className="card-title">Others</IonText>
            </IonCol>
          </IonRow> 
        </IonCardContent>
      </IonCard>

      {/* My Events Section */}
      <EventSection
        title="My Events"
        events={myEvents}
        onSeeAll={seeAllMyEvents}
        onOpenEvent={openEvent}
      />

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
  );
};

export default DashboardPresenter;
