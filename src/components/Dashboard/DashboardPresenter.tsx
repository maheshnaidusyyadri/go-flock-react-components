import React, { useState } from "react";
import "./DashboardPresenter.scss";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonList,
  IonContent,
  IonLabel,
  IonActionSheet,
} from "@ionic/react";
import { DashboardProps, Event } from "@goflock/types/src/index";
import EventDP from "../../images/event_DP.png";
import menuIcon from "../../images/menuIcon.svg";
import AddIcon from "../../images/icons/add-circle.svg";
import vacationIcon from "../../images/icons/vacation.svg";
import birthdayIcon from "../../images/icons/birthday.svg";
import marriageIcon from "../../images/icons/marriage.svg";
import graduationIcon from "../../images/icons/graduation.svg";
import moreIcon from "../../images/icons/more.svg";

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

      <IonCard className="events_sec">
        <IonCardHeader className="events_head">
          <IonCardTitle className="events_title">Active Events</IonCardTitle>
          <span
            className="viewall"
            onClick={() => seeAllEvents("guest")}
          >
            See all
          </span>
        </IonCardHeader>
        <IonCardContent className="events_cnt">
          <IonList className="ion-list">
            {activeEvents.map((event: Event) => (
              <div
                className="event_item"
                key={event.id}
                onClick={() => openEvent(event.id)}
              >
                <figure>
                  <img
                    className="events"
                    alt="Events"
                    src={EventDP}
                  />
                </figure>
                <div className="event_info">
                  <IonLabel className="event-name">{event.name}</IonLabel>
                  <span>May 16 - May 17</span>
                </div>
                <span className="actions_menu">
                  <span id="open-action-sheet">
                    <img
                      className="events"
                      alt="Event Details"
                      src={menuIcon}
                    />
                  </span>
                </span>
              </div>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>
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
                    onClick={() => createNewEvent()}
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
                        alt="Graduation"
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
      <IonCard className="events_sec">
        <IonCardHeader className="events_head">
          <IonCardTitle className="events_title">My Events</IonCardTitle>
          <span
            className="viewall"
            onClick={() => seeAllMyEvents()}
          >
            See all
          </span>
        </IonCardHeader>
        <IonCardContent className="events_cnt">
          <IonList className="ion-list">
            {myEvents.map((event) => (
              <div
                className="event_item"
                key={event.id}
                onClick={() => openEvent(event.id)}
              >
                <figure>
                  <img
                    className="events"
                    alt="Events"
                    src={EventDP}
                  />{" "}
                </figure>
                <div className="event_info">
                  <IonLabel className="event-name">{event.name}</IonLabel>
                  <span>May 16 - May 17</span>
                </div>
              </div>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>

      <IonActionSheet
        trigger="open-action-sheet"
        className="action-menu-end"
        buttons={[
          {
            text: "Copy link",
            role: "destructive",
            data: {
              action: "delete",
            },
          },
          {
            text: "Edit Event",
            data: {
              action: "share",
            },
          },
          {
            text: "Add Checklist",
            data: {
              action: "cancel",
            },
          },
          {
            text: "Delete Event",
            data: {
              action: "cancel",
            },
            handler: () => {
              console.log("Delete clicked " + showFirstActionSheet);
              setShowFirstActionSheet(false); // Close the first action sheet
              setShowDeleteActionSheet(true); // Open the delete action sheet
            },
          },
        ]}
      ></IonActionSheet>

      <IonActionSheet
        className="action-menu-end"
        isOpen={showDeleteActionSheet} // Controls visibility of delete action sheet
        onDidDismiss={() => setShowDeleteActionSheet(false)} // Dismiss delete action sheet
        buttons={[
          {
            text: "Delete Event",
            role: "destructive",
            data: {
              action: "delete",
            },
            cssClass: "fill-btn",
          },
          {
            text: "Cancel",
            data: {
              action: "cancel",
            },
            cssClass: "rounded",
          },
        ]}
      ></IonActionSheet>
    </IonContent>
  );
};

export default DashboardPresenter;
