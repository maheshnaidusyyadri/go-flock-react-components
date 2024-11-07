import React, { useEffect, useState } from "react";
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
  IonAvatar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { EventVisibility } from "@goflock/types/src/index";
import { EventAddExpenseProps } from "@goflock/types/src/presenter/";
import EqualIcon from "../../images/icons/Equal.svg";
import DollarIcon from "../../images/icons/Dollar.svg";
import PercentIcon from "../../images/icons/Percent.svg";
import unselect from "../../images/icons/remove.svg";

import Header from "../Header/Header";
import CustomInput from "../Common/CustomInput";
import { FormProvider, useForm } from "react-hook-form";
import SelectMembers from "./SelectExpense";
//import { EventMember, Transaction } from "@goflock/types";
import { EventMember, Transaction } from "@goflock/types/src/index";
import { getDisplayName } from "../../utils/utils";
const AddExpensePresenter: React.FC<EventAddExpenseProps> = ({
  //profile,
  event,
  addTransaction,
}) => {
  const [] = useState<EventVisibility>();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [contactsList, setContactsList] = useState<EventMember[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFromPaidBy, setIsFromPaidBy] = useState(false);
  //const [selectedMember, setSelectedMembers] = useState<EventMember[]>([]);
  const [selectedMember, setSelectedMembers] = useState<any>([]);
  const [selectedEqallAmount, setSelectedEqallAmount] = useState<any>([]);
  // @ts-ignore
  const [selectedPaidBy, setselectedPaidBy] = useState<any>(null);
  const [selectedAmount, setTotalAmount] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState<
    "equal" | "amount" | "percentage"
  >("equal");

  // @ts-ignore
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // @ts-ignore
  const [error, setError] = useState<string | null>(null);

  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    getValues,
    clearErrors,
    trigger,
  } = useForm();

  // Function to go to the previous step
  const nextStep = (formData: any) => {
    console.log("nextStep-Data", formData);
    console.log("currentStep", currentStep);
    if (currentStep === 2) {
      let totalSelectedAmount = selectedMember.map((total: any) => {
        return parseFloat(total.amount);
      });
      console.log("totalSelectedAmount (as integers)", totalSelectedAmount);
      // Calculate the sum of the amounts
      let sumOfSelectedAmount = totalSelectedAmount.reduce(
        (acc: any, curr: any) => acc + curr
      );
      console.log("sumOfSelectedAmount", sumOfSelectedAmount);
      let selectedAmountInt = parseFloat(selectedAmount || "0");
      console.log("selectedAmountInt", selectedAmountInt);
      // Check if the total matches selectedAmount
      if (sumOfSelectedAmount !== selectedAmountInt) {
        alert(
          `The total amount does not match the entered ${
            selectedSegment === "amount" ? "dollar amount" : "percentage"
          }.`
        );
        return; // Prevent moving to the next step
      }
    }
    if (currentStep === 1) {
      const validSelectedAmount = selectedAmount !== null ? selectedAmount : 0;
      const shareAmount =
        selectedMember.length > 0
          ? (validSelectedAmount / selectedMember.length).toFixed(2)
          : "0";
      selectedMember.forEach((memberItem: any) => {
        memberItem.amount = shareAmount;
        memberItem.percentage =
          validSelectedAmount > 0
            ? ((parseFloat(shareAmount) / validSelectedAmount) * 100).toFixed(2)
            : "0";
      });
      setSelectedEqallAmount(selectedMember);
      console.log("selectedMember", selectedMember);
    }
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

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

  const onError = (error: any) => {
    const formData = getValues(); // Get current form values
    console.log("Current Form Data:", formData);
    console.log("onError", error);
  };

  useEffect(() => {
    console.log("event.members", event);
    setContactsList(event.members);
  }, [event]);

  const handleMemberSelect = (selected: string[] | string | null | any) => {
    if (isFromPaidBy) {
      setValue("paidBy", selected.name);
      setselectedPaidBy(selected);
      clearErrors("paidBy");
    } else {
      const numberOfSelected = selected.length;
      if (numberOfSelected && numberOfSelected > 0) {
        setValue("splitAmong", `${numberOfSelected} People`);
      }
      setSelectedMembers(selected);
      clearErrors("splitAmong");
    }
    //setIsOpen(false);
  };
  const handlePaidByClick = () => {
    setIsFromPaidBy(true);
    setIsOpen(true);
  };
  const handleChooseMembersClick = () => {
    setIsFromPaidBy(false);
    setIsOpen(true);
  };
  const handleClose = () => {
    if (isFromPaidBy) {
      setValue("paidBy", null);
      setselectedPaidBy(null);
      trigger();
    } else {
      setValue("splitAmong", null);
      setSelectedMembers([]);
      trigger();
    }
    setIsOpen(false);
  };
  const handleRemove = (memberToRemove: any) => {
    const updatedMembers = selectedMember.filter(
      (member: any) => member.id !== memberToRemove.id
    );
    setSelectedMembers(updatedMembers);
    if (updatedMembers && updatedMembers.length > 0) {
      setValue("splitAmong", `${updatedMembers.length} People`);
    } else {
      setValue("splitAmong", null);
    }
    trigger();
  };

  const handleSave = (formData: any) => {
    console.log("handleSave-Data", formData);
    handleAddTransaction(formData);
  };

  const handleAddTransaction = async (formData: any) => {
    setIsLoading(true);
    setError(null);
    // let transaction: Transaction = {
    //   eventId: event.id,
    //   deleted: false,
    //   description: "Sample transaction",
    //   amount: 100,
    //   date: new Date().toISOString(),
    //   paidUserId: profile.id,
    //   //splitAmongUserIds: [profile.id],
    //   splitAmongUserIds: [
    //     {
    //       userId: profile.id,
    //       amount: 100,
    //       currency: "USD",
    //     },
    //   ],
    //   currency: "USD",
    // };
    let transaction: Transaction = {
      eventId: event.id,
      deleted: false,
      description: formData.billName,
      amount: formData.totalAmount,
      date: new Date().toISOString(),
      paidUserId: selectedPaidBy.id,
      splitAmongUserIds: [],
      currency: "USD",
    };
    if (selectedMember && selectedMember.length > 0) {
      transaction.splitAmongUserIds = selectedMember.map((member: any) => ({
        userId: member.id,
        amount: member.amount,
        currency: "USD",
      }));
    }
    try {
      await addTransaction(transaction);
    } catch (err) {
      setError("Failed to add transaction");
    } finally {
      setIsLoading(false);
    }
  };
  // Function to handle changes in the dollar amount input
  const handleAmountChange = (value: string, index: number) => {
    const amount = parseFloat(value) || 0;
    const updatedPercentage = (amount / (selectedAmount || 0)) * 100;
    const updatedMembers = [...selectedMember];
    updatedMembers[index] = {
      ...updatedMembers[index],
      amount: amount,
      percentage: updatedPercentage.toFixed(2), // Update corresponding percentage
    };
    setSelectedMembers(updatedMembers);
  };
  // Function to handle changes in the percentage input
  const handlePercentageChange = (value: string, index: number) => {
    const percentage = parseFloat(value) || 0;
    const updatedAmount = ((selectedAmount || 0) * percentage) / 100;
    const updatedMembers = [...selectedMember];
    updatedMembers[index] = {
      ...updatedMembers[index],
      percentage: percentage,
      amount: updatedAmount.toFixed(2), // Update corresponding dollar amount
    };
    setSelectedMembers(updatedMembers);
  };

  return (
    <>
      <Header
        title="Add expense"
        showMenu={false}
        showContactList={false}
        showProfile={true}
      />
      <IonGrid className="expense_page">
        <IonList className="stepper-container">{renderSteps()}</IonList>
        <FormProvider {...methods}>
          <IonGrid className="stepper-content">
            <IonGrid className={`step-content ${getStepClass(1)}`}>
              <IonGrid className="form-container">
                <IonCardContent className="pad0">
                  <IonList className="form-group">
                    <CustomInput
                      placeholder={"Expense Details"}
                      label={"Expense details"}
                      fieldName={"billName"}
                      isRequired={true}
                      errors={errors}
                      errorText={"Expense Details"}
                      register={register}
                    />
                  </IonList>
                  <IonList className="form-group">
                    <CustomInput
                      placeholder={"Total Amount"}
                      label={"Total Amount"}
                      fieldName={"totalAmount"}
                      isRequired={true}
                      errors={errors}
                      errorText={"Total Amount"}
                      register={register}
                      inputType="number"
                      onInputChange={(e) => setTotalAmount(e.detail.value)}
                    />
                  </IonList>
                  <IonList className="form-group" onClick={handlePaidByClick}>
                    <CustomInput
                      placeholder={"You"}
                      label={"Paid by"}
                      fieldName={"paidBy"}
                      isRequired={true}
                      errors={errors}
                      errorText={"Paid By"}
                      register={register}
                      readonly={true}
                    />
                  </IonList>
                  <IonList>
                    <>
                      <IonLabel
                        className="form-group"
                        onClick={handleChooseMembersClick}
                      >
                        <CustomInput
                          placeholder={"Choose members"}
                          label={"Split among"}
                          fieldName={"splitAmong"}
                          isRequired={true}
                          errors={errors}
                          errorText={"Choose members"}
                          register={register}
                          readonly={true}
                        />
                      </IonLabel>
                    </>
                    <IonGrid class="profile-list">
                      {selectedMember.map((eventMember: any) => (
                        <div
                          key={eventMember.id}
                          className="profile-item"
                          onClick={() => handleRemove(eventMember)}
                        >
                          <IonThumbnail className="profile-avatar-wrapper">
                            <>
                              {eventMember.profileImg ? (
                                <IonAvatar className="profile-avatar">
                                  <img
                                    src={eventMember.profileImg}
                                    alt={eventMember.name}
                                  />
                                </IonAvatar>
                              ) : (
                                <IonAvatar className="profile-dp">
                                  {getDisplayName(eventMember?.name)}
                                </IonAvatar>
                              )}
                            </>
                            <img
                              src={unselect}
                              alt="status"
                              className="remove_user"
                            />
                          </IonThumbnail>
                          <IonLabel className="profile-name">
                            {eventMember.name}
                          </IonLabel>
                        </div>
                      ))}
                    </IonGrid>
                  </IonList>
                </IonCardContent>
              </IonGrid>
            </IonGrid>

            <IonGrid className={`step-content ${getStepClass(2)}`}>
              <IonSegment
                value={selectedSegment}
                onIonChange={(e) =>
                  setSelectedSegment(
                    e.detail.value as "equal" | "amount" | "percentage"
                  )
                }
              >
                <IonSegmentButton value="equal">
                  <IonImg src={EqualIcon} />
                </IonSegmentButton>
                <IonSegmentButton value="amount">
                  <IonImg src={DollarIcon} />
                </IonSegmentButton>
                <IonSegmentButton value="percentage">
                  <IonImg src={PercentIcon} />
                </IonSegmentButton>
              </IonSegment>

              {selectedSegment === "equal" && (
                <div id="home-page">
                  <IonList className="list_wrap">
                    {selectedEqallAmount.map((Item: any, index: any) => (
                      <IonItem key={index} className="user_item">
                        <IonThumbnail slot="start" className="dp">
                          {Item.profileImg ? (
                            <IonAvatar className="profile-avatar">
                              <img
                                src={Item.profileImg}
                                alt={`${Item.name}'s profile`}
                              />
                            </IonAvatar>
                          ) : (
                            <IonAvatar className="profile-dp">
                              {getDisplayName(Item?.name)}
                            </IonAvatar>
                          )}
                        </IonThumbnail>
                        <IonLabel className="user_name">
                          {Item.name || Item.phoneNumber}
                        </IonLabel>
                        <IonText class="amout">${Item.amount}</IonText>
                      </IonItem>
                    ))}
                  </IonList>
                </div>
              )}

              {selectedSegment === "amount" && (
                <div id="radio-page">
                  <IonList className="list_wrap">
                    {selectedMember.map((Item: any, index: any) => (
                      <IonItem key={index} className="user_item">
                        <IonThumbnail slot="start" className="dp">
                          {Item.profileImg ? (
                            <IonAvatar className="profile-avatar">
                              <img
                                src={Item.profileImg}
                                alt={`${Item.name}'s profile`}
                              />
                            </IonAvatar>
                          ) : (
                            <IonAvatar className="profile-dp">
                              {getDisplayName(Item?.name)}
                            </IonAvatar>
                          )}
                        </IonThumbnail>
                        <IonLabel className="user_name">
                          {Item.name || Item.phone}
                        </IonLabel>
                        <IonInput
                          className="ion_input prefix"
                          value={Item.amount}
                          label=""
                          labelPlacement="stacked"
                          placeholder="0.00"
                          type="number" // Ensures numeric input
                          inputmode="decimal"
                          onIonInput={(e) =>
                            handleAmountChange(e.detail.value || "", index)
                          }
                        />
                      </IonItem>
                    ))}
                  </IonList>
                </div>
              )}

              {selectedSegment === "percentage" && (
                <div id="library-page">
                  <IonList className="list_wrap">
                    {selectedMember.map((Item: any, index: any) => (
                      <IonItem key={index} className="user_item">
                        <IonThumbnail slot="start" className="dp">
                          {Item.profileImg ? (
                            <IonAvatar className="profile-avatar">
                              <img
                                src={Item.profileImg}
                                alt={`${Item.name}'s profile`}
                              />
                            </IonAvatar>
                          ) : (
                            <IonAvatar className="profile-dp">
                              {getDisplayName(Item?.name)}
                            </IonAvatar>
                          )}
                        </IonThumbnail>
                        <IonLabel className="user_name">
                          {Item.name || Item.phone}
                        </IonLabel>
                        <IonInput
                          class="ion_input safix"
                          value={Item.percentage}
                          label=""
                          labelPlacement="stacked"
                          placeholder="0"
                          type="number" // Ensures numeric input
                          inputmode="decimal"
                          onIonInput={(e) =>
                            handlePercentageChange(e.detail.value || "", index)
                          }
                        />
                      </IonItem>
                    ))}
                  </IonList>
                </div>
              )}
            </IonGrid>

            <IonGrid className={`step-content ${getStepClass(3)}`}>
              <IonList className="list_wrap">
                {selectedMember.map((Item: any, index: any) => (
                  <IonItem key={index} className="user_item">
                    <IonThumbnail slot="start" className="dp">
                      {Item.profileImg ? (
                        <IonAvatar className="profile-avatar">
                          <img
                            src={Item.profileImg}
                            alt={`${Item.name}'s profile`}
                          />
                        </IonAvatar>
                      ) : (
                        <IonAvatar className="profile-dp">
                          {getDisplayName(Item?.name)}
                        </IonAvatar>
                      )}
                    </IonThumbnail>
                    <IonLabel className="user_name">
                      {Item.name || Item.phoneNumber}
                    </IonLabel>
                    <IonText class="amout">${Item.amount}</IonText>
                  </IonItem>
                ))}
              </IonList>
            </IonGrid>
          </IonGrid>
          <IonFooter className="actions-container stickyFooter">
            <IonButton
              className="primary-btn actions"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </IonButton>
            <IonButton
              className="primary-btn actions"
              onClick={handleSubmit(nextStep, onError)}
              disabled={currentStep === totalSteps}
            >
              Next
            </IonButton>
            {currentStep === totalSteps && (
              <IonButton
                className="primary-btn save"
                // onClick={() => handleSave()}
                onClick={handleSubmit(handleSave, onError)}
                expand="block"
              >
                Save & Back To Home
              </IonButton>
            )}
          </IonFooter>
        </FormProvider>
      </IonGrid>

      <IonGrid className={`custom-modal ${isOpen ? "open" : ""}`}>
        {true && (
          <>
            <SelectMembers
              title={isFromPaidBy ? "Who paid" : "Choose members"}
              members={contactsList}
              isMultiple={!isFromPaidBy}
              onMemberSelect={handleMemberSelect}
              modalClose={handleClose}
            />
            <IonFooter className="stickyFooter hasFooter">
              <IonButton
                className="primary-btn rounded"
                onClick={() => setIsOpen(false)}
              >
                Done
              </IonButton>
            </IonFooter>
          </>
        )}
      </IonGrid>
    </>
  );
};

export default AddExpensePresenter;
