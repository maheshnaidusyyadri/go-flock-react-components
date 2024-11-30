import React, { useState } from "react";
import {
  IonContent,
  IonTitle,
  IonText,
  IonicSlides,
  IonGrid,
  IonCard,
  IonButton,
  IonLabel,
  IonFooter,
  IonPage,
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

const Onboarding: React.FC<IntroductionProps> = ({ introCompleted }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const slides = [
    {
      icon: <EventsIcon />,
      title: "Create Events",
      text: "And invite guests or friends receive RSVP",
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
        <Swiper
          modules={[Autoplay, Pagination, IonicSlides, Navigation]}
          autoplay={false}
          pagination={true}
          loop={false}
          navigation={activeIndex !== slides.length - 1} // Hide navigation on the last slide
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
        <IonFooter>
          <>
            {activeIndex !== slides.length - 1 && (
              <IonLabel className="skip" onClick={introCompleted}>
                Skip
              </IonLabel>
            )}

            {activeIndex === slides.length - 1 && (
              <IonButton
                className="primary-btn rounded getstart ion-no-margin"
                onClick={introCompleted}
              >
                Get Started
              </IonButton>
            )}
          </>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
