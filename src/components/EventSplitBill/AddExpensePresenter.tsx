import React, { useState } from "react";
import "./EventSplitBillPresenter.scss";

import {
  IonButton, 
  IonLabel,
  IonText,  
  IonFooter,
  IonGrid, 
  IonImg, 
  IonThumbnail,
  IonItem,
  IonCardContent,
  IonList,
  IonInput,
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonModal,
  IonContent,
} from "@ionic/react";
import {
 // EventSplitBillProps,
  EventVisibility, 
} from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import EqualIcon from "../../images/icons/Equal.svg"; 
import DollarIcon from "../../images/icons/Dollar.svg"; 
import PercentIcon from "../../images/icons/Percent.svg"; 
import ProfileIcon from "../../images/profile.png"; 

import Header from "../Header/Header"; 
 

interface EventSplitBillProps {
  members: { 
    name: string; 
    phone: string;  
    expanse: string; 
    profileImage?: string 
    className : string
  }[];
   
}

const EventBillPresenter: React.FC<EventSplitBillProps> = ({
  members = [ ],
}) => {
  
  // @ts-ignore
  const [endDate, setEndDate] = useState<Date>(new Date());
  // @ts-ignore
  const [startTime, setStartTime] = useState<string>("10:00 AM");
  // @ts-ignore
  const [endTime, setEndTime] = useState<string>("12:00 PM");

  const [] = useState<EventVisibility>();


  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const totalSteps = 3; // Define the total number of steps

  // Function to go to the next step
  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Render steps dynamically based on the total number of steps
  const renderSteps = () => {
    return Array.from({ length: totalSteps }, (_, index) => (
      <div
        key={index}
        className={`step ${index + 1 <= currentStep ? "active" : ""}`}
      ></div>
    ));
  };
  
  const getStepClass = (step: number) => {
    if (step < currentStep) return "prev";
    if (step === currentStep) return "current";
    if (step > currentStep) return "next";
    return "";
  };
   

  function setEventName(_arg0: string): void {
    throw new Error("Function not implemented.");
  }

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>  
      <Header         
        title='Add expense'
        showMenu={false}
        showContactList={false} 
        showProfile = {true} 
      />
      <IonGrid
        className="pageCnt create_event"        
      >
        <IonList className="stepper-container">{renderSteps()}</IonList>
          <IonGrid className="stepper-content"> 
          <IonGrid className={`step-content ${getStepClass(1)}`}>
              <IonGrid className="form-container">
                <IonCardContent className="pad0">
                  <IonList className="form-group">
                    <IonInput
                      value=''
                      label="Expense details*"
                      labelPlacement="stacked"
                      placeholder="Enter bill name"
                      onIonChange={(e) => setEventName(e.detail.value!)}
                    />
                  </IonList>
                  <IonList className="form-group">
                    <IonInput
                      value=''
                      label="Total Amount*"
                      labelPlacement="stacked"
                      placeholder="Enter amount"
                      onIonChange={(e) => setEventName(e.detail.value!)}
                    />
                  </IonList>
                  <IonList className="form-group" onClick={() => setIsOpen(true)}>
                    <IonInput
                      value=''
                      label="Paid by*"
                      labelPlacement="stacked"
                      placeholder="You"
                      onIonChange={(e) => setEventName(e.detail.value!)}
                    />
                  </IonList>
                  <IonList className="form-group">
                    <IonInput
                      value=''
                      label="Split among*"
                      labelPlacement="stacked"
                      placeholder="Choose members"
                      onIonChange={(e) => setEventName(e.detail.value!)}
                      readonly
                    />
                  </IonList>
                    
                </IonCardContent>
              </IonGrid>
            </IonGrid>
            <IonGrid className={`step-content ${getStepClass(2)}`}>
            <IonTabs className="expense_tabs">
                <IonTabBar slot="top">
                  <IonTabButton tab="home">
                    <IonImg 
                     src={EqualIcon} />
                  </IonTabButton>
                  <IonTabButton tab="radio">
                    <IonImg 
                     src={DollarIcon} />
                  </IonTabButton>
                  <IonTabButton tab="library">
                    <IonImg 
                     src={PercentIcon} />
                  </IonTabButton> 
                </IonTabBar>

                <IonTab tab="home">
                  <div id="home-page">
                    <IonList className="list_wrap"> 
                      {members.map((member, index) => (
                        <IonItem
                          key={index}
                          className="user_item" 
                        >
                          <IonThumbnail
                            slot="start"
                            className="dp"
                          >
                            <IonImg
                              src={ProfileIcon}
                              alt={`${member.name}'s profile`}
                            /> 
                          </IonThumbnail>
                          <IonLabel className="user_name">
                            {member.name}
                            {member.phone}
                          </IonLabel>
                          <IonText class="amout">
                            {member.expanse}
                          </IonText>
                        </IonItem>
                      ))}
                    </IonList> 
                  </div>
                </IonTab>
                <IonTab tab="radio">
                  <div id="radio-page">
                    <IonList className="list_wrap"> 
                      {members.map((member, index) => (
                        <IonItem
                          key={index}
                          className="user_item" 
                        >
                          <IonThumbnail
                            slot="start"
                            className="dp"
                          >
                            <IonImg
                              src={ProfileIcon}
                              alt={`${member.name}'s profile`}
                            /> 
                          </IonThumbnail>
                          <IonLabel className="user_name">
                            {member.name}
                            {member.phone}
                          </IonLabel>
                          <IonInput
                                  className="ion_input prefix"
                                  value=''
                                  label=""
                                  labelPlacement="stacked"
                                  placeholder="0.00"
                                  type="number"  // Ensures numeric input
                                  inputmode="decimal"
                                  onIonChange={(e) => setEventName(e.detail.value!)} 
                                />
                        </IonItem>
                      ))}
                    </IonList>                     
                  </div>
                </IonTab>
                <IonTab tab="library">
                  <div id="library-page">
                    <IonList className="list_wrap"> 
                      {members.map((member, index) => (
                        <IonItem
                          key={index}
                          className="user_item" 
                        >
                          <IonThumbnail
                            slot="start"
                            className="dp"
                          >
                            <IonImg
                              src={ProfileIcon}
                              alt={`${member.name}'s profile`}
                            /> 
                          </IonThumbnail>
                          <IonLabel className="user_name">
                            {member.name}
                            {member.phone}
                          </IonLabel>
                          <IonInput
                            class="ion_input safix"
                            value=''
                            label=""
                            labelPlacement="stacked"
                            placeholder="0"
                            type="number"  // Ensures numeric input
                            inputmode="decimal"
                            onIonChange={(e) => setEventName(e.detail.value!)} 
                          />
                        </IonItem>
                      ))}
                    </IonList>
                  </div>
                </IonTab> 
              </IonTabs>
            </IonGrid>
            <IonGrid className={`step-content ${getStepClass(3)}`}>
            <IonList className="list_wrap"> 
              {members.map((member, index) => (
                <IonItem
                  key={index}
                  className="user_item" 
                >
                  <IonThumbnail
                    slot="start"
                    className="dp"
                  >
                    <IonImg
                      src={ProfileIcon}
                      alt={`${member.name}'s profile`}
                    /> 
                  </IonThumbnail>
                  <IonLabel className="user_name">
                     {member.name}
                     {member.phone}
                  </IonLabel>
                  <IonText class="amout" className={member.className}>
                    {member.expanse}
                  </IonText>
                </IonItem>
              ))}
            </IonList> 
            </IonGrid>
          </IonGrid>
          {/* <IonFooter className="action_screen_buttons">
            <IonButton className="primary-btn rounded">Next</IonButton> 
          </IonFooter> */}
          <IonFooter className="actions-container">
          <IonButton
            className="primary-btn actions"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </IonButton>
          <IonButton
            className="primary-btn actions"
            onClick={nextStep}
            disabled={currentStep === totalSteps}
          >
            Next
          </IonButton>
          {currentStep === totalSteps && (
            <IonButton
              className="primary-btn"
             // onClick={() => handleCreateEvent()}
              expand="block"
              //disabled={isCreating || !selectedLocation || !eventName}
            >
               Save & Back To Home
            </IonButton>
          )}
        </IonFooter>
      </IonGrid> 

      <IonModal isOpen={isOpen}>
          {/* <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader> */}
          <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
    </>
  );
};

export default EventBillPresenter;
