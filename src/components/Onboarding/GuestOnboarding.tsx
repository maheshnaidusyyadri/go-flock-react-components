import React, { useState } from "react";
import {
  IonContent,
  IonTitle,
  IonText,
  IonicSlides,
  IonGrid,
  IonCard,
  IonImg,
  IonCol,
  IonFooter,
  IonButton,
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
import { FormProvider, useForm } from "react-hook-form";
import CustomPhoneNumber from "../Common/CustomPhone";
import { EventProps } from "@goflock/types";
import OtpVerification from "../Common/OtpVerification";

const GuestOnboarding: React.FC<EventProps> = ({ sendOTP, verifyOTP }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();
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
  const handleGenerateOtp = (formData: any) => {
    let phoneNumber = formData.phone;
    sendOTP(phoneNumber).then((result) => {
      console.log("Send-Otp-res", result);
      setShowOtpModal(true);
    });
  };
  const handleVerifyOTP = (formData: any) => {
    verifyOTP(formData.phone, formData.otp).then((result) => {
      console.log("veifyOtp-res", result);
    });
  };
  const onGenerateError = (error: any) => {
    console.log("onGenerateError", error);
    console.log(activeIndex);
  };
  return (
    <>
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
        {!showOtpModal && (
          <FormProvider {...methods}>
            <IonCol className="form-group">
              <CustomPhoneNumber
                control={control}
                fieldName="phone"
                isRequired={true}
                errors={errors}
                register={register}
                errorText={"Mobile Number"}
                onPhoneChange={(e: any) => setPhoneNumber(e)}
              />
            </IonCol>
            <IonFooter
              className="stickyFooter"
              onClick={handleSubmit(handleGenerateOtp, onGenerateError)}
            >
              <IonButton className="primary-btn rounded">
                {"Generate OTP"}
              </IonButton>
            </IonFooter>
          </FormProvider>
        )}
        {showOtpModal && (
          <IonGrid className={`rsvp_modal ${showOtpModal ? "active" : ""}`}>
            <FormProvider {...methods}>
              <OtpVerification
                control={control}
                phoneNumber={phoneNumber}
                errors={errors}
                fieldName="otp"
                isRequired={true}
              />
              <IonFooter className="stickyFooter">
                <IonButton
                  expand="block"
                  shape="round"
                  className="primary-btn"
                  onClick={handleSubmit(handleVerifyOTP, onGenerateError)}
                >
                  {"Verify & Process"}
                </IonButton>
              </IonFooter>
            </FormProvider>
          </IonGrid>
        )}
      </IonContent>
    </>
  );
};

export default GuestOnboarding;
