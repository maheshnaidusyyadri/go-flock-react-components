import React, { useEffect, useState } from "react";
import "./EventSplitBillPresenter.scss";

import {
  IonPage,
  IonContent,
  IonButton,
  IonLabel,
  IonText,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonThumbnail,
  IonItem,
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
  profile,
  event,
  addTransaction,
}) => {
  const [] = useState<EventVisibility>();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [contactsList, setContactsList] = useState<EventMember[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFromPaidBy, setIsFromPaidBy] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedMember, setSelectedMembers] = useState<any>([]);
  const [selectedEqallAmount, setSelectedEqallAmount] = useState<any>([]);
  // @ts-ignore
  const [selectedPaidBy, setselectedPaidBy] = useState<any>(null);
  const [selectedAmount, setTotalAmount] = useState<any>(null);
  const [sumOfSelectedAmt, setSumOfSelectedAmt] = useState<any>(null);
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

  function getDecimalValue(value: any) {
    if (value % 1 === 0) {
      return value.toFixed(2);
    } else {
      return Math.floor(value * 100) / 100;
    }
  }
  const nextStep = (formData: any) => {
    console.log("nextStep-Data", formData);
    console.log("currentStep", currentStep);
    setShowError(false);
    if (currentStep === 2) {
      let totalSelectedAmount = selectedMember.map((total: any) => {
        return parseFloat(total.amount);
      });
      console.log("totalSelectedAmount (as floats)", totalSelectedAmount);
      // Calculate the sum of the amounts without rounding
      let sumOfSelectedAmount = totalSelectedAmount.reduce(
        (acc: number, curr: number) => acc + curr,
        0
      );
      console.log(
        "sumOfSelectedAmount (without rounding)",
        sumOfSelectedAmount
      );
      // Parse the selected amount for comparison
      let selectedAmountInt = parseFloat(selectedAmount || "0");
      console.log("selectedAmountInt", selectedAmountInt);
      setSumOfSelectedAmt(sumOfSelectedAmount);
      // const tolerance = 0.01;
      // if (Math.abs(sumOfSelectedAmount - selectedAmountInt) > tolerance) {
      //   setShowError(true);
      //   return;
      // }
      if (sumOfSelectedAmount !== selectedAmountInt) {
        setShowError(true);
        return;
      }
    }

    if (currentStep === 1) {
      const validSelectedAmount =
        selectedAmount !== null ? parseFloat(selectedAmount) : 0;

      const shareAmount =
        selectedMember.length > 0
          ? validSelectedAmount / selectedMember.length
          : 0;

      selectedMember.forEach((memberItem: any) => {
        memberItem.amount = getDecimalValue(shareAmount);
        memberItem.percentage =
          validSelectedAmount > 0
            ? getDecimalValue((shareAmount / validSelectedAmount) * 100)
            : 0;
      });
      const sumOfSelectedAmount = selectedMember.reduce(
        (acc: number, curr: any) => acc + parseFloat(curr.amount),
        0
      );

      console.log("shareAmount", shareAmount);
      console.log("selectedMember after distribution", selectedMember);
      console.log(
        "sumOfSelectedAmount after distribution",
        sumOfSelectedAmount
      );

      const remainingAmount = validSelectedAmount - sumOfSelectedAmount;

      console.log("remainingAmount to be adjusted", remainingAmount);

      const isSelectedPaidByInList = selectedMember.some(
        (member: any) => member.id === selectedPaidBy?.id
      );

      let updatedSelectedMember = [...selectedMember];

      if (isSelectedPaidByInList) {
        updatedSelectedMember = selectedMember.map((member: any) => {
          if (member.id === selectedPaidBy?.id) {
            const updatedAmount = parseFloat(member.amount) + remainingAmount;
            const updatedPercentage =
              (updatedAmount / validSelectedAmount) * 100;
            return {
              ...member,
              amount: updatedAmount.toFixed(2),
              percentage: getDecimalValue(updatedPercentage),
            };
          }
          return member;
        });
      } else {
        updatedSelectedMember[0].amount = (
          parseFloat(updatedSelectedMember[0].amount) + remainingAmount
        ).toFixed(2);
        const updatedFirstMemberPercentage =
          (parseFloat(updatedSelectedMember[0].amount) / validSelectedAmount) *
          100;
        updatedSelectedMember[0].percentage = getDecimalValue(
          updatedFirstMemberPercentage
        );
      }
      setSelectedEqallAmount(updatedSelectedMember);
      setSelectedMembers(updatedSelectedMember);
      console.log(
        "updatedSelectedMember after adjustment",
        updatedSelectedMember
      );
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
      addedByUserId: profile.id,
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
    <IonPage>
      <Header
        title="Add expense"
        showMenu={false}
        showContactList={false}
        showProfile={false}
        profile={profile}
      />
      <IonContent className="ion-padding expense_page">
        <IonList className="stepper-container ion-no-margin ion-margin-bottom">
          {renderSteps()}
        </IonList>
        <FormProvider {...methods}>
          {currentStep == 1 && (
            <IonGrid
              className={`ion-no-padding ion-padding-top step-content ${getStepClass(
                1
              )}`}
            >
              <IonRow>
                <IonCol className="form-group ion-padding-bottom">
                  <CustomInput
                    placeholder={"Expense Details"}
                    label={"Expense details"}
                    fieldName={"billName"}
                    isRequired={true}
                    errors={errors}
                    errorText={"Expense Details"}
                    register={register}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="form-group ion-padding-bottom">
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
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol
                  className="form-group ion-padding-bottom"
                  onClick={handlePaidByClick}
                >
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
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol
                  className="form-group ion-padding-bottom"
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
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol></IonCol>
              </IonRow>
              <IonGrid class="profile-list">
                {selectedMember.map((eventMember: any) => (
                  <IonList
                    key={eventMember.id}
                    className="profile-item"
                    onClick={() => handleRemove(eventMember)}
                  >
                    <IonThumbnail className="profile-avatar-wrapper">
                      <>
                        {eventMember.profileImg ? (
                          <IonAvatar className="profile-avatar">
                            <IonImg
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
                      <IonImg
                        src={unselect}
                        alt="status"
                        className="remove_user"
                      />
                    </IonThumbnail>
                    <IonLabel className="profile-name">
                      {eventMember.name}
                    </IonLabel>
                  </IonList>
                ))}
              </IonGrid>
            </IonGrid>
          )}
          {currentStep == 2 && (
            <IonGrid
              className={`ion-no-padding step-content ${getStepClass(2)}`}
            >
              <IonSegment
                className="segment-tabs"
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
                <IonRow id="home-page">
                  <IonCol size="12">
                    <IonList className="list_wrap">
                      {selectedEqallAmount.map((Item: any, index: any) => (
                        <IonItem key={index} className="user_item">
                          <IonThumbnail slot="start" className="dp">
                            {Item.profileImg ? (
                              <IonAvatar className="profile-avatar">
                                <IonImg
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
                  </IonCol>
                </IonRow>
              )}

              {selectedSegment === "amount" && (
                <IonRow id="radio-page">
                  <IonCol size="12">
                    <IonList className="list_wrap expense_tabs">
                      {selectedMember.map((Item: any, index: any) => (
                        <IonItem key={index} className="user_item">
                          <IonThumbnail slot="start" className="dp">
                            {Item.profileImg ? (
                              <IonAvatar className="profile-avatar">
                                <IonImg
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
                  </IonCol>
                </IonRow>
              )}

              {selectedSegment === "percentage" && (
                <IonRow id="library-page">
                  <IonCol size="12">
                    <IonList className="list_wrap expense_tabs">
                      {selectedMember.map((Item: any, index: any) => (
                        <IonItem key={index} className="user_item">
                          <IonThumbnail slot="start" className="dp">
                            {Item.profileImg ? (
                              <IonAvatar className="profile-avatar">
                                <IonImg
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
                              handlePercentageChange(
                                e.detail.value || "",
                                index
                              )
                            }
                          />
                        </IonItem>
                      ))}
                    </IonList>
                  </IonCol>
                </IonRow>
              )}
              {showError && (
                <>
                  {selectedSegment === "amount" && (
                    <IonLabel className="contribution_alert">
                      ${sumOfSelectedAmt} of ${selectedAmount}
                      <IonText className="balance">
                        ($
                        {Math.abs(selectedAmount - sumOfSelectedAmt).toFixed(
                          2
                        )}{" "}
                        {selectedAmount - sumOfSelectedAmt < 0
                          ? "exceeded"
                          : "left"}
                        )
                      </IonText>
                    </IonLabel>
                  )}

                  {selectedSegment === "percentage" && (
                    <IonLabel className="contribution_alert">
                      {((sumOfSelectedAmt / selectedAmount) * 100).toFixed(2)}%
                      of 100%
                      <IonText className="balance">
                        (%
                        {Math.abs(
                          ((selectedAmount - sumOfSelectedAmt) /
                            selectedAmount) *
                            100
                        ).toFixed(2)}{" "}
                        {selectedAmount - sumOfSelectedAmt < 0
                          ? "exceeded"
                          : "left"}
                        )
                      </IonText>
                    </IonLabel>
                  )}
                </>
              )}
            </IonGrid>
          )}
          {currentStep == 3 && (
            <IonGrid className={`step-content ${getStepClass(3)}`}>
              <IonList className="list_wrap">
                {selectedMember.map((Item: any, index: any) => (
                  <IonItem key={index} className="user_item">
                    <IonThumbnail slot="start" className="dp">
                      {Item.profileImg ? (
                        <IonAvatar className="profile-avatar">
                          <IonImg
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
          )}
        </FormProvider>
      </IonContent>
      <IonFooter className="actions-container stickyFooter ion-padding">
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
    </IonPage>
  );
};

export default AddExpensePresenter;
