import React, { useState } from "react";
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
//import { IntroductionProps } from "@goflock/types/src/presenter";

const GuestOnboarding: React.FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const slides = [
    {
      image: EventsIcon,
      title: "Create Events",
      text: "And invite guests or friends receive RSVP",
    },
    {
      image: mediaIcon,
      title: "Share Photos",
      text: "Capture the fleeting moment in photographs!",
    },
    {
      image: chatIcon,
      title: "Chat with the Group",
      text: "Engage in lively conversation among members and ravel in the event!",
    },
    {
      image: expancesIcon,
      title: "Split expenses",
      text: "Capture the fleeting moment in photographs!",
    },
  ];

  return (
    <IonContent className="onboard_cnt guest-user">
      <Swiper
        modules={[Autoplay, Pagination, IonicSlides, Navigation]}
        autoplay={false}
        pagination={true}
        loop={false}
        navigation={false} // Hide navigation on the last slide
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <IonGrid className="step-content">
              <IonCard className="auth_screen">
                <IonImg src={slide.image} alt={slide.title} />
                <IonTitle className="ion-title">{slide.title}</IonTitle>
                <IonText className="ion-text">{slide.text}</IonText>
              </IonCard>
            </IonGrid>
          </SwiperSlide>
        ))}
      </Swiper>
      <IonGrid>Phone</IonGrid>
    </IonContent>
  );
};

export default GuestOnboarding;
