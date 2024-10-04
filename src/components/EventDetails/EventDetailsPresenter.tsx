import React from "react";
import "./EventDetailsPresenter.scss";
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonItem, IonItemDivider, IonLabel, IonList, IonRow, IonText, IonThumbnail, IonTitle } from "@ionic/react";
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css";
import EventDp from "../../images/event_DP.png";
import clockIcon from "../../images/icons/clock.svg";
import locationIcon from "../../images/icons/pointer.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import addUserIcon from "../../images/icons/addUser.svg";
import userDp from "../../images/user.png";
import userTickIcon from "../../images/icons/userTick.svg";
import userCrossIcon from "../../images/icons/userCross.svg";
import helpIcon from "../../images/icons/help.svg";

import Header from "../Header/Header";
import { EventProps } from "@goflock/types/src";
import Footer from "../Footer/Footer"; 

const EventDetailsPresenter: React.FC<EventProps> = ({}) => {
  // const [locationQuery, setLocationQuery] = useState<string>("");
  // const [locationResults, setLocationResults] = useState<LocationInfo[]>([]);
  // const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(
  //   null
  // );
  return ( 
    <IonContent className="create_event">
      <Header
        title="Giggles & Games Gala"
        showMenu={true}
        showContactList={false}
      />
      <IonGrid className="event_details">
        <IonCard className="event_info">
          <IonThumbnail className="event_dp">
            <IonImg
              src={EventDp}
              alt="Event"
            />
          </IonThumbnail>
          <IonText className="event_brief">
            Lorem ipsum dolor sit amet consectetur. Feugiat tristique
            adipiscing augue vestibulum comma. Nec facilisi accumsan at
            pretium tempor et magna.
          </IonText>
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
                  <IonCardTitle className="event_title">Mar 16 (Fri) - May 18 2021 (Mon)</IonCardTitle>
                  <IonCardSubtitle className="event_subtitle">9:00 AM - 11:30 AM</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonItem>
            <IonItem className="ion-list">
              <IonCard className="venue_info">
                <IonThumbnail className="dp">
                  <IonImg
                    src={locationIcon}
                    alt=" "
                  />
                </IonThumbnail>
                <IonCardContent className="event_titles">
                  <IonCardTitle className="event_title">New York, NY</IonCardTitle>
                  <IonCardSubtitle className="event_subtitle">9:00 AM - 11:30 AM</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
              <IonThumbnail className="event_type">
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
            <IonThumbnail className="add-user">
              <IonImg
                src={addUserIcon}
                alt="Event"
              />
            </IonThumbnail>
          </IonItem>             
          <IonGrid className="users_list">
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
            <IonList className="user-item">
              <IonThumbnail className="dp">
                <IonImg
                  src={userDp}
                  alt="Event"
                />
              </IonThumbnail>
              <IonLabel className="user-name">Leslie Leslie</IonLabel>
            </IonList>
          </IonGrid>             
        </IonCard>
        <IonItemDivider className="devider"></IonItemDivider>
        <IonGrid className="status_sec">
          <IonLabel className="status-title">RSVP Status</IonLabel>
          <IonRow className="status_cards success">
            <IonCol className="status_card">
              <IonAvatar className="avatar">
                <IonImg className="ion-img"
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
                <IonImg className="ion-img"
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
                <IonImg className="ion-img"
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
        <IonButton className="primary-btn rounded">Invite Guests</IonButton>
      </IonGrid>
      <Footer />
    </IonContent> 
  );
};
export default EventDetailsPresenter;
