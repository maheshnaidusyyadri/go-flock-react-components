import React from "react";
import "./EventDetailsPresenter.scss";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRow,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import "react-datepicker/dist/react-datepicker.css";
import EventDp from "../../images/event_DP.png";
import clockIcon from "../../images/icons/clock.svg";
import locationIcon from "../../images/icons/pointer.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import addUserIcon from "../../images/icons/addUser.svg";
import userTickIcon from "../../images/icons/userTick.svg";
import userCrossIcon from "../../images/icons/userCross.svg";
import helpIcon from "../../images/icons/help.svg";

import Header from "../Header/Header";
import { EventProps } from "@goflock/types/src";
import Footer from "../Footer/Footer";
import DisplayDate from "../../utils/DisplayDate";
import ProfileList from "../Common/Profiles/ProfileList";

const EventDetailsPresenter: React.FC<EventProps> = ({
  event,
  inviteMembers,
  navigateToEventLocation,
  deleteEvent,
}) => {
  return (
    <IonContent className="create_event">
      <Header
        eventId={event.id}
        title={event.name}
        showMenu={true}
        showContactList={false}
        deleteEvent={deleteEvent}
      />
      <IonGrid className="event_details">
        <IonCard className="event_info">
          <IonThumbnail className="event_dp">
            <IonImg
              src={EventDp}
              alt="Event"
            />
          </IonThumbnail>
          <IonText className="event_brief">{event.description}</IonText>
          <IonList className="listitems">
            <IonItem className="ion-list">
              <IonCard className="venue_info">
                <IonThumbnail className="dp">
                  <IonImg
                    src={clockIcon}
                    alt="Page Back"
                  />
                </IonThumbnail>
                <IonCardContent className="event_titles">
                  <IonCardTitle className="event_title">
                    <DisplayDate inputDate={event.time.startDate} />
                  </IonCardTitle>
                  <IonCardSubtitle className="event_subtitle">
                    {event.time.startTime} - {event.time.endTime}
                  </IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonItem>
            <IonItem className="ion-list">
              <IonCard className="venue_info">
                <IonThumbnail
                  className="dp"
                  onClick={() => navigateToEventLocation(event.id)}
                >
                  <IonImg
                    src={locationIcon}
                    alt=" "
                  />
                </IonThumbnail>
                <IonCardContent className="event_titles">
                  <IonCardTitle className="event_title">
                    {event.location.name}
                  </IonCardTitle>
                </IonCardContent>
              </IonCard>
              <IonThumbnail
                className="event_type"
                onClick={() => navigateToEventLocation(event.id)}
              >
                <IonImg
                  src={GlobeIcon}
                  alt=""
                />
              </IonThumbnail>
            </IonItem>
          </IonList>
        </IonCard>
        <IonItemDivider className="devider"></IonItemDivider>
        <IonCard className="users_info">
          <IonItem className="users_head">
            <IonLabel className="ion-label">Invite Guests</IonLabel>
            <IonThumbnail
              className="add-user"
              onClick={() => inviteMembers(event.id)}
            >
              <IonImg
                src={addUserIcon}
                alt="Event"
              />
            </IonThumbnail>
          </IonItem>
          <IonGrid className="users_list">
            <ProfileList
              eventId={event.id}
              eventMembers={event.members}
            />
          </IonGrid>
        </IonCard>
        <IonItemDivider className="devider"></IonItemDivider>
        <IonGrid className="status_sec">
          <IonLabel className="status-title">RSVP Status</IonLabel>
          <IonRow className="status_cards success">
            <IonCol className="status_card">
              <IonAvatar className="avatar">
                <IonImg
                  className="ion-img"
                  src={userCrossIcon}
                  alt="Event"
                />
              </IonAvatar>
              <IonLabel className="ion-label">Attending</IonLabel>
              <span className="devider"></span>
              <IonLabel className="count">0</IonLabel>
            </IonCol>
            <IonCol className="status_card error">
              <IonAvatar className="avatar">
                <IonImg
                  className="ion-img"
                  src={userTickIcon}
                  alt="Event"
                />
              </IonAvatar>
              <IonLabel className="ion-label">Not Attending</IonLabel>
              <span className="devider"></span>
              <IonLabel className="count">0</IonLabel>
            </IonCol>
            <IonCol className="status_card warning">
              <IonAvatar className="avatar">
                <IonImg
                  className="ion-img"
                  src={helpIcon}
                  alt="Event"
                />
              </IonAvatar>
              <IonLabel className="ion-label">Not Sure</IonLabel>
              <span className="devider"></span>
              <IonLabel className="count">0</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton
          className="primary-btn rounded"
          onClick={() => inviteMembers(event.id)}
        >
          Invite Guests
        </IonButton>
      </IonGrid>
      <Footer
        eventId={event.id}
        activeTab={"home"}
      />
    </IonContent>
  );
};
export default EventDetailsPresenter;
