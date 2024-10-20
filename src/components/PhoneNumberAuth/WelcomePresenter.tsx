import React, { useState } from "react";
import "./PhoneNumberAuthPresenter.scss";
import {
  IonButton,
  IonImg,
  IonContent,
  IonLabel,
  IonText,
  IonCard,
  IonGrid,
} from "@ionic/react";
import { PhoneNumberAuthProps } from "@goflock/types/src/index"; // Adjust the import based on your file structure
import Welcome from "../../images/welcome.svg";

// import Header from '../Header/Header';

const WelcomePresenter: React.FC<PhoneNumberAuthProps> = ({}) => {
  // const [eventName, setEventName] = useState<string>("");
  // const [eventType, setEventType] = useState<EventType>();
  // const [eventDescription, setEventDescription] = useState<string>("");
  // @ts-ignore
  const [startDate, setStartDate] = useState<Date>(new Date());
  // @ts-ignore
  const [endDate, setEndDate] = useState<Date>(new Date());
  // @ts-ignore
  const [startTime, setStartTime] = useState<string>("10:00 AM");
  // @ts-ignore
  const [endTime, setEndTime] = useState<string>("12:00 PM");

  return (
    <>
      <IonContent
        scrollY={false}
        className="action_screen ion-padding"
        fullscreen
      >
        <IonGrid className="onboarding_sec">
          <IonCard className="auth_cnt">
            <IonImg
              className="welcome"
              alt="Welcome to Go Flock"
              src={Welcome}
            />
            <IonLabel className="auth-title">Welcome</IonLabel>
            <IonText className="subtitle">
              Welcome aboard! Your journey with our Application begins now.
            </IonText>
          </IonCard>
        </IonGrid>
        <IonButton expand="block" shape="round" className="primary-btn">
          Get Started
        </IonButton>
      </IonContent>
    </>
  );
};

export default WelcomePresenter;
