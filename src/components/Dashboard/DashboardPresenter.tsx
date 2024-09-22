import React from "react";
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
import { DashboardProps } from "@goflock/types/src/index";
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
  openEvent,
  seeAllMyEvents,
  seeAllEvents,
}) => {
  return (
    <IonContent className="dashboard">
      <IonCard className="db_profile">
        <IonCardHeader>
          <IonAvatar slot="start">
            <img
              src={profile.pictureUrl}
              alt="Profile"
            />
          </IonAvatar>
          <IonCardTitle>Welcome, {profile.prefName}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {profile.isIntroShown ? (
            <p>Your preferences are set! Check out the latest events below.</p>
          ) : (
            <p>Welcome! Let's get started by setting up your preferences.</p>
          )}
          {/* <IonButton
            onClick={createNewEvent}
            expand="block"
          >
            Create New Event
          </IonButton> */}
        </IonCardContent>
      </IonCard>

      <IonCard className="events_sec">
        <IonCardHeader>
          <IonCardTitle>Active Events</IonCardTitle>
          <span
            className="viewall"
            onClick={() => seeAllEvents("birthday")}
          >
            See all
          </span>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {activeEvents.map((event) => (
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
                  <IonLabel>{event.name}</IonLabel>
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
        <IonCardHeader>
          <IonCardTitle>All Events</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <div className="events_list">
              <div className="event_info">
                <ul>
                  <li className="create">
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
        <IonCardHeader>
          <IonCardTitle>My Events</IonCardTitle>
          <span
            className="viewall"
            onClick={seeAllMyEvents}
          >
            See all
          </span>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
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
                  <IonLabel>{event.name}</IonLabel>
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
          },
        ]}
      ></IonActionSheet>
    </IonContent>
  );
};

export default DashboardPresenter;
