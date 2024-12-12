import React, { useState } from "react";
import {
  IonContent,
  IonTitle,
  IonText,
  IonicSlides,
  IonGrid,
  IonCard,
  IonButton,
  IonFooter,
  IonPage,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./OnboardingPresenter.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@ionic/react/css/ionic-swiper.css";

import EventsIcon from "../Common/Icons/Events";
import MediaIcon from "../Common/Icons/Media";
import ChatIcon from "../Common/Icons/Chat";
import ExpancesIcon from "../Common/Icons/Split";

import { IntroductionProps } from "@goflock/types/src/presenter";
import InvitozLogo from "../Common/Icons/Logo";

const Onboarding: React.FC<IntroductionProps> = ({ introCompleted }) => {
  const [, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const slides = [
    {
      icon: <EventsIcon />,
      title: "Create Events",
      text: "And invite guests or friends receive RSVP!",
    },
    {
      icon: <MediaIcon />,
      title: "Share Photos",
      text: "Capture the fleeting moment in photographs!",
    },
    {
      icon: <ChatIcon />,
      title: "Chat with the Group",
      text: "Engage in lively conversation among members and ravel in the event!",
    },
    {
      icon: <ExpancesIcon />,
      title: "Split expenses",
      text: "Capture the fleeting moment in photographs!",
    },
  ];

  return (
    <IonPage>
      <IonContent className="onboard_cnt ion-padding">
        <IonRow>
          <IonCol className="ion-text-center">
            <InvitozLogo />
          </IonCol>
        </IonRow>
        <IonRow className="ion-padding-top">
          <IonCol className="ion-text-center">
            <Swiper
              modules={[Autoplay, Pagination, IonicSlides, Navigation]}
              autoplay={false}
              pagination={true}
              loop={false}
              navigation={{ nextEl: null, prevEl: null }} // Hide navigation on the last slide
              onSlideChange={handleSlideChange}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <IonGrid className="step-content ion-no-padding">
                    <IonCard className="auth_screen">
                      {slide.icon}
                      <IonTitle className="ion-title">{slide.title}</IonTitle>
                      <IonText className="ion-text">{slide.text}</IonText>
                    </IonCard>
                  </IonGrid>
                </SwiperSlide>
              ))}
            </Swiper>
          </IonCol>
        </IonRow>
      </IonContent>
      <IonFooter>
        <IonRow>
          <IonCol>
            <IonButton
              className="primary-btn rounded getstart ion-no-margin"
              onClick={introCompleted}
            >
              Get Started
            </IonButton>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};

export default Onboarding;
