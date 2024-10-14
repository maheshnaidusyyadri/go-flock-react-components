import React from "react";
import {
  IonContent,
  IonTitle,
  IonText,
  IonicSlides,
  IonGrid,
  IonCard,
  IonImg,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./OnboardingPresenter.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@ionic/react/css/ionic-swiper.css";

import EventsIcon from "../../images/auth-1.svg";
import mediaIcon from "../../images/auth-2.svg";
import chatIcon from "../../images/auth-3.svg";
import expancesIcon from "../../images/auth-4.svg";
import { IntroductionProps } from "@goflock/types/src/presenter";

const Onboarding: React.FC<IntroductionProps> = ({ introCompleted }) => {
  return (
    <IonContent className="onboard_cnt">
      <Swiper
        modules={[Autoplay, Pagination, IonicSlides, Navigation]}
        autoplay={false}
        pagination={true}
        loop={true}
        navigation={true}
      >
        <SwiperSlide>
          <IonGrid className="step-content">
            <IonCard className="auth_screen">
              <IonImg
                src={EventsIcon}
                alt="Private Event"
              />
              <IonTitle className="ion-title">Create Events</IonTitle>
              <IonText className="ion-text">
                And invite guests or friends receive RSVP
              </IonText>
            </IonCard>
          </IonGrid>
        </SwiperSlide>
        <SwiperSlide>
          <IonGrid className="step-content">
            <IonCard className="auth_screen">
              <IonImg
                src={mediaIcon}
                alt="Private Event"
              />
              <IonTitle className="ion-title">Share Photos</IonTitle>
              <IonText className="ion-text">
                Capture the fleeting moment in photographs!
              </IonText>
            </IonCard>
          </IonGrid>
        </SwiperSlide>
        <SwiperSlide>
          <IonGrid className="step-content">
            <IonCard className="auth_screen">
              <IonImg
                src={chatIcon}
                alt="Private Event"
              />
              <IonTitle className="ion-title">Chat with the Group</IonTitle>
              <IonText className="ion-text">
                Engage in lively conversation among members and ravel in the
                event!
              </IonText>
            </IonCard>
          </IonGrid>
        </SwiperSlide>
        <SwiperSlide>
          <IonGrid className="step-content">
            <IonCard className="auth_screen">
              <IonImg
                src={expancesIcon}
                alt="Private Event"
              />
              <IonTitle className="ion-title">Split expenses</IonTitle>
              <IonText className="ion-text">
                Capture the fleeting moment in photographs!
              </IonText>
            </IonCard>
          </IonGrid>
        </SwiperSlide>
      </Swiper>
      <span
        className="skip"
        onClick={() => introCompleted()}
      >
        Skip
      </span>
    </IonContent>
  );
};

export default Onboarding;
