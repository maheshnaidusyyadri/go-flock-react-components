import React from "react";
import "./CreateNewEventPresenter.scss";
import {
  IonButton,
  IonLabel,
  IonText,
  IonFooter,
  IonGrid,
  IonImg,
} from "@ionic/react";
import { CreateNewEventProps } from "@goflock/types/src/index"; // Adjust the import based on your file structure
import Success from "../../images/celebration.svg";
import Header from "../Header/Header";

const EventCreatedPresenter: React.FC<CreateNewEventProps> = ({}) => {
  return (
    <>
      <Header
        title=""
        showMenu={false}
        showContactList={false}
        showProfile={true}
      />
      <IonGrid className="action_screen has_header">
        <IonGrid className="action_screen_cnt">
          <IonImg
            className="ion-img"
            alt="Successfully Created Event"
            src={Success}
          />
          <IonLabel className="action_title">
            Successfully Created Event
          </IonLabel>
          <IonText className="action_info">
            Event Created! 🎉 Now, let's make it unforgettable. Invite friends
            and let the good times roll!
          </IonText>
        </IonGrid>
        <IonFooter className="action_screen_buttons">
          <IonButton className="primary-btn">Go To Event Details</IonButton>
          <IonButton className="secondary-btn" onClick={() => {}}>
            Invite Friends To The Event
          </IonButton>
        </IonFooter>
      </IonGrid>
    </>
  );
};

export default EventCreatedPresenter;
