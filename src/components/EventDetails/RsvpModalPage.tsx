import React, { lazy, useEffect, useState } from "react";
import "./EventDetailsPresenter.scss";

import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonThumbnail,
} from "@ionic/react";

import Header from "../Header/Header";
import { EventProps, RSVP } from "@goflock/types/src";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import kidsIcon from "../../images/Kids.svg";
import adultsIcon from "../../images/Adults.svg";
import plusIcon from "../../images/icons/Plus.svg";

import minusIcon from "../../images/icons/Minus.svg";
import CustomTextarea from "../Common/CustomTextarea";
import Yes from "../Common/Icons/Yes";
import No from "../Common/Icons/No";
import NotSure from "../Common/Icons/NotSure";
import party from "party-js";
import useToastUtils from "../../utils/ToastUtils";

const CustomPhoneNumber = lazy(() => import("../Common/CustomPhone"));
const OtpVerification = lazy(() => import("../Common/OtpVerification"));

interface RsvpModalPageProps extends EventProps {
  setIsInviteActive: (isModelActive: boolean) => void;
}
const RsvpModalPage: React.FC<RsvpModalPageProps> = ({
  event,
  eventRelation,
  isPreview,
  profile,
  sendOTP,
  verifyOTP,
  submitRSVP,
  setIsInviteActive,
}) => {
  const [, setIsOpen] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [adultCount, setAdultCount] = useState(
    eventRelation.rsvp?.adultsCount || 0
  );
  const [kidsCount, setKidsCount] = useState(
    eventRelation.rsvp?.kidsCount || 0
  );
  const [activeOption, setActiveOption] = useState("yes");
  const [submitRSVPInProgress, setSubmitRSVPInProgress] = useState(false);
  const { presentToast } = useToastUtils();
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneVerificationState, setPhoneVerificationState] = useState<
    "start" | "otpSent" | "verified"
  >("start");

  const methods = useForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  useEffect(() => {
    if (eventRelation.rsvp) {
      if (eventRelation.rsvp.response == "attending") {
        setActiveOption("yes");
      } else if (eventRelation.rsvp.response == "not-attending") {
        setActiveOption("no");
      } else {
        setActiveOption("notSure");
      }
      setAdultCount(eventRelation.rsvp.adultsCount || 0);
      setKidsCount(eventRelation.rsvp.kidsCount || 0);
    }
  }, [eventRelation]);

  const handleBackAction = () => {
    console.log(eventRelation);
    setIsInviteActive(false);
    if (eventRelation.rsvp) {
      if (eventRelation.rsvp.response == "attending") {
        setActiveOption("yes");
      } else if (eventRelation.rsvp.response == "not-attending") {
        setActiveOption("no");
      } else {
        setActiveOption("notSure");
      }
      setAdultCount(eventRelation.rsvp.adultsCount || 0);
      setKidsCount(eventRelation.rsvp.kidsCount || 0);
    }

    setPhoneVerificationState("start");
  };

  const handleClick = (option: React.SetStateAction<string>) => {
    setShowValidation(false);
    // setAdultCount(0);
    //setKidsCount(0);
    setActiveOption(option);
  };
  const incrementAdults = () => {
    setShowValidation(false);
    setAdultCount(adultCount + 1);
  };
  const decrementAdults = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
      setShowValidation(false);
    } else {
      //setShowValidation(true);
    }
  };

  const incrementKids = () => {
    setShowValidation(false);
    setKidsCount(kidsCount + 1);
  };
  const decrementKids = () => {
    if (kidsCount > 0) {
      setKidsCount(kidsCount - 1);
      setShowValidation(false);
    } else {
      //setShowValidation(true);
    }
  };

  const handleSendOtp = (formData: any) => {
    console.log("handSendOtp", formData);
    setPhoneNumber(formData.phone);

    if (formData.phone) {
      setSendingOtp(true);
      sendOTP(phoneNumber)
        .then((result) => {
          console.log("Send-Otp-res", result);
          setPhoneVerificationState("otpSent");
        })
        .finally(() => {
          setSendingOtp(false);
        });
    } else {
      presentToast("Please enter a phone number", "bottom", "danger");
    }
  };

  const handleRsvpSubmission = (formData: any) => {
    console.log("handleRsvpSubmission", formData);

    if (isPreview) {
      presentToast("Cannot submit RSVP in guest view", "bottom", "danger");
      return;
    }

    if (adultCount === 0 && kidsCount === 0 && activeOption !== "no") {
      setShowValidation(true);
      return;
    } else {
      setShowValidation(false);
    }

    if (profile) {
      submitRsvpAction(formData);
    } else {
      setVerifyingOtp(true);
      verifyOTP(formData.otp, formData.otp)
        .then((result) => {
          console.log("verifyOTP-res", result);
          if (result) {
            setPhoneVerificationState("verified");
            submitRsvpAction(formData);
          } else {
            presentToast("Invalid OTP", "bottom", "danger");
          }
          setVerifyingOtp(false);
        })
        .catch((err) => {
          console.error("verifyOTP-error", err);
          setVerifyingOtp(false);
        });
    }
  };

  const onGenerateError = (error: any) => {
    console.log("onGenerateError", error);

    if (error.name) {
      presentToast("Please enter you name", "bottom", "danger");
    }

    if (adultCount === 0 && kidsCount === 0 && activeOption !== "no") {
      setShowValidation(true);
      return;
    } else {
      setShowValidation(false);
    }
  };

  const submitRsvpAction = (formData: any) => {
    let response: "attending" | "not-attending" | "maybe" | "not-answered" =
      "attending";
    if (activeOption === "no") {
      response = "not-attending";
    } else if (activeOption === "notSure") {
      response = "maybe";
    } else if (activeOption === "yes") {
      response = "attending";
    }

    let rsvp: RSVP = {
      response: response,
      count: 0,
      comment: formData.note || "",
      kidsCount: 0,
      adultsCount: 0,
      name: profile?.prefName || formData.name || "",
    };
    if (activeOption !== "no") {
      rsvp.count = kidsCount + adultCount;
      rsvp.kidsCount = kidsCount;
      rsvp.adultsCount = adultCount;
    }

    setSubmitRSVPInProgress(true);
    submitRSVP(event.id, rsvp)
      .then((res) => {
        console.log("submitRSVP-res", res);
        successRSVP();
      })
      .catch((err) => {
        console.error("submitRSVP-error", err);
      })
      .finally(() => {
        setSubmitRSVPInProgress(false);
      });
  };

  const handleConfetti = () => {
    party.confetti(document.body, {
      count: party.variation.range(100, 1000),
      speed: party.variation.range(100, 300),
    });
  };

  const successRSVP = () => {
    handleConfetti();
    presentToast("Successfully submitted RSVP.", "bottom", "success");
    reset();
    setIsOpen(false);
    setIsInviteActive(false);
    setKidsCount(0);
    setAdultCount(0);
  };

  return (
    <IonPage>
      <Header
        title={"Are you going?"}
        showGoBack={true}
        leftButtonAction={handleBackAction}
        showProgressBar={submitRSVPInProgress || verifyingOtp || sendingOtp}
      ></Header>
      <IonContent className="ion-padding rsvp-modal">
        <IonList className="rsvp-actions">
          <IonItem
            className="ionitem"
            onClick={() => handleClick("yes")}
          >
            <IonText
              className={`iontext yes ${
                activeOption === "yes" ? "active" : ""
              }`}
            >
              <Yes />
              Yes
            </IonText>
          </IonItem>
          <IonItem
            className="ionitem"
            onClick={() => handleClick("no")}
          >
            <IonText
              className={`iontext no ${activeOption === "no" ? "active" : ""}`}
            >
              <No />
              No
            </IonText>
          </IonItem>
          <IonItem
            className="ionitem"
            onClick={() => handleClick("notSure")}
          >
            <IonText
              className={`iontext notSure ${
                activeOption === "notSure" ? "active" : ""
              }`}
            >
              <NotSure />
              Not sure
            </IonText>
          </IonItem>
        </IonList>
        <FormProvider {...methods}>
          {activeOption !== "no" && (
            <IonGrid className="guest-section">
              <IonCard className="guest-info">
                <IonCard className="card-cnt">
                  <IonThumbnail>
                    <IonImg src={adultsIcon} />
                  </IonThumbnail>
                  <IonLabel className="guest-type">Adults</IonLabel>
                  <IonCard className="counter-sec">
                    <IonButton
                      className="counter-btn"
                      onClick={decrementAdults}
                    >
                      <IonImg src={minusIcon} />
                    </IonButton>
                    <IonLabel className="counter-value">{adultCount}</IonLabel>
                    <IonButton
                      className="counter-btn"
                      onClick={incrementAdults}
                    >
                      <IonImg src={plusIcon} />
                    </IonButton>
                  </IonCard>
                </IonCard>
              </IonCard>
              <IonCard className="guest-info">
                <IonCard className="card-cnt">
                  <IonThumbnail>
                    <IonImg src={kidsIcon} />
                  </IonThumbnail>
                  <IonLabel class="guest-type">Kids</IonLabel>
                  <IonCard className="counter-sec">
                    <IonButton
                      className="counter-btn"
                      onClick={decrementKids}
                    >
                      <IonImg src={minusIcon} />
                    </IonButton>
                    <IonLabel className="counter-value">{kidsCount}</IonLabel>
                    <IonButton
                      className="counter-btn"
                      onClick={incrementKids}
                    >
                      <IonImg src={plusIcon} />
                    </IonButton>
                  </IonCard>
                </IonCard>
              </IonCard>
              {showValidation && (
                <IonText class="form-error">
                  {"* At least one adult or kid is required"}
                </IonText>
              )}
            </IonGrid>
          )}

          <IonGrid className="guest-form">
            {activeOption === "no" && (
              <IonRow>
                <IonCol className="form-group ion-padding-bottom">
                  <CustomTextarea
                    placeholder={"Write a note..."}
                    label={"Send a note (Optional)"}
                    fieldName={"note"}
                    isRequired={false}
                    errors={errors}
                    register={register}
                  />
                </IonCol>
              </IonRow>
            )}
            {(!profile || profile.prefName === "") && (
              <>
                <IonItemDivider className="devider"></IonItemDivider>
                {phoneVerificationState === "start" && (
                  <>
                    <IonRow>
                      <IonCol className="form-group ion-padding-bottom">
                        <CustomInput
                          placeholder={"Enter your name"}
                          label={"Your Name"}
                          fieldName={"name"}
                          isRequired={true}
                          errors={errors}
                          errorText={"Name"}
                          register={register}
                        />
                      </IonCol>
                    </IonRow>
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
                  </>
                )}
                {phoneVerificationState === "otpSent" && (
                  <IonRow>
                    <IonCol className="form-group">
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
                    </IonCol>
                  </IonRow>
                )}
              </>
            )}
          </IonGrid>
        </FormProvider>
      </IonContent>
      {(profile || phoneVerificationState === "otpSent") && (
        <IonFooter
          className="stickyFooter"
          onClick={handleSubmit(handleRsvpSubmission, onGenerateError)}
        >
          <IonButton
            disabled={submitRSVPInProgress}
            className="primary-btn rounded"
          >
            {submitRSVPInProgress ? "Submitting RSVP" : "Submit RSVP"}
          </IonButton>
        </IonFooter>
      )}
      {!profile && phoneVerificationState === "start" && (
        <IonFooter
          className="stickyFooter"
          onClick={handleSubmit(handleSendOtp, onGenerateError)}
        >
          <IonButton
            disabled={submitRSVPInProgress}
            className="primary-btn rounded"
          >
            {sendingOtp ? "Sending OTP" : "Verify phone & RSVP"}
          </IonButton>
        </IonFooter>
      )}
    </IonPage>
  );
};
export default RsvpModalPage;
