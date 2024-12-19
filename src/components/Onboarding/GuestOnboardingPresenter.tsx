import React, { useState } from "react";
import {
  IonContent,
  IonTitle,
  IonText,
  IonicSlides,
  IonGrid,
  IonCard,
  IonCol,
  IonFooter,
  IonButton,
  IonRow,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./GuestOnboardingPresenter.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@ionic/react/css/ionic-swiper.css";

import EventsIcon from "../Common/Icons/Events";
import MediaIcon from "../Common/Icons/Media";
import ChatIcon from "../Common/Icons/Chat";
import ExpancesIcon from "../Common/Icons/Split";

import { FormProvider, useForm } from "react-hook-form";
import CustomPhoneNumber from "../Common/CustomPhone";
import OtpVerification from "../Common/OtpVerification";
import Header from "../Header/Header";
import { GuestOnboardingProps } from "@goflock/types";

const GuestOnboardingPresenter: React.FC<GuestOnboardingProps> = ({
  eventMinDetails,
  sendOTP,
  verifyOTP,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
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
      icon: <EventsIcon />,
      title: "Secure RSVP",
      text: "Securely submit RSVP to help plan better!",
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
  const handleGenerateOtp = (formData: any) => {
    let phoneNumber = formData.phone;
    setSendingOtp(true);
    sendOTP(phoneNumber)
      .then((result) => {
        console.log("Send-Otp-res", result);
        setShowOtpModal(true);
      })
      .finally(() => {
        setSendingOtp(false);
      });
  };
  const handleVerifyOTP = (formData: any) => {
    setVerifyingOtp(true);
    verifyOTP(formData.otp)
      .then((result) => {
        console.log("veifyOtp-res", result);
      })
      .finally(() => {
        setVerifyingOtp(false);
      });
  };
  const onGenerateError = (error: any) => {
    console.log("onGenerateError", error);
    console.log(activeIndex);
  };
  return (
    <IonPage>
      <Header
        title={""}
        showLogo={true}
        logoPosition="middle"
        showGoBack={false}
        showProgressBar={sendingOtp || verifyingOtp}
      ></Header>
      {/* <IonContent className="onboard_cnt guest-user ion-padding"> */}
      {!showOtpModal && (
        <>
          <IonContent className="onboard-cnt guest-user ion-padding">
            <IonGrid className="guest-auth-form ion-no-padding">
              <IonRow>
                <IonCol>
                  <IonLabel className="info-alert">
                    You are invited to <strong> {eventMinDetails.name} </strong>
                    .
                  </IonLabel>
                  <p className="paragraph ion-padding-top">
                    You’ve received a personal event invitation from{" "}
                    <strong>{eventMinDetails.hostedBy}</strong>! Please verify
                    your phone number to access the full invitation, RSVP, and
                    collaborate by securely sharing photos and memories from the
                    event.
                  </p>
                </IonCol>
              </IonRow>

              <FormProvider {...methods}>
                <IonRow>
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
                </IonRow>
              </FormProvider>
            </IonGrid>
            <Swiper
              modules={[Autoplay, Pagination, IonicSlides, Navigation]}
              className="guest-onboarding"
              autoplay={true}
              pagination={true}
              loop={true}
              navigation={false} // Hide navigation on the last slide
              onSlideChange={handleSlideChange}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <IonGrid className="step-content">
                    <IonCard className="auth-screen">
                      {slide.icon}
                      <IonTitle className="ion-title">{slide.title}</IonTitle>
                      <IonText className="ion-text">{slide.text}</IonText>
                    </IonCard>
                  </IonGrid>
                </SwiperSlide>
              ))}
            </Swiper>
          </IonContent>
          <IonFooter className="ion-padding">
            <IonButton
              disabled={sendingOtp}
              className="primary-btn rounded"
              onClick={handleSubmit(handleGenerateOtp, onGenerateError)}
            >
              {sendingOtp ? "Sending OTP" : "Send OTP"}
            </IonButton>
          </IonFooter>
        </>
      )}
      {showOtpModal && (
        <>
          <IonContent className="ion-padding">
            {/* <IonGrid className={`rsvp-modal ${showOtpModal ? "active" : ""}`}> */}
            <IonGrid className="varify-cnt ion-no-padding">
              <FormProvider {...methods}>
                <OtpVerification
                  control={control}
                  phoneNumber={phoneNumber}
                  errors={errors}
                  fieldName="otp"
                  isRequired={true}
                  sendOTP={sendOTP}
                />
              </FormProvider>
            </IonGrid>
          </IonContent>
          <IonFooter className="ion-padding">
            <IonButton
              disabled={verifyingOtp}
              expand="block"
              shape="round"
              className="primary-btn"
              onClick={handleSubmit(handleVerifyOTP, onGenerateError)}
            >
              {verifyingOtp ? "Verifying" : "Verify"}
            </IonButton>
          </IonFooter>
        </>
      )}
    </IonPage>
  );
};

export default GuestOnboardingPresenter;
