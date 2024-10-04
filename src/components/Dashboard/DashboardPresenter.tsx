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
  IonList,
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
            <img
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
            <p>Your preferences are set! Check out the latest events below.</p>
          ) : (
            <p>Welcome! Let's get started by setting up your preferences.</p>
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

      {/* My Events Section */}
      <EventSection
        title="My Events"
        events={myEvents}
        onSeeAll={seeAllMyEvents}
        onOpenEvent={openEvent}
      />

      {/* Event Categories Section */}
      <IonCard className="events_sec">
        <IonCardHeader className="events_head">
          <IonCardTitle className="events_title">All Events</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="events_cnt">
          <IonList className="ion-list">
            <div className="events_list">
              <div className="event_info">
                <ul>
                  <li
                    className="create"
                    onClick={createNewEvent}
                  >
                    <label>
                      <img
                        src={AddIcon}
                        alt="Create Event"
                      />
                    </label>
                    <span>Add events</span>
                  </li>
                  <li>
                    <label>
                      <img
                        src={birthdayIcon}
                        alt="Birthday"
                      />
                    </label>
                    <span>Birthdays</span>
                  </li>
                  <li>
                    <label>
                      <img
                        src={vacationIcon}
                        alt="Vacations"
                      />
                    </label>
                    <span>Vacation trips</span>
                  </li>
                  <li>
                    <label>
                      <img
                        src={marriageIcon}
                        alt="Marriage"
                      />
                    </label>
                    <span>Marriage</span>
                  </li>
                  <li>
                    <label>
                      <img
                        src={graduationIcon}
                        alt="Graduation"
                      />
                    </label>
                    <span>Graduation</span>
                  </li>
                  <li>
                    <label>
                      <img
                        src={moreIcon}
                        alt="Others"
                      />
                    </label>
                    <span>Others</span>
                  </li>
                </ul>
              </div>
            </div>
          </IonList>
        </IonCardContent>
      </IonCard>

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
