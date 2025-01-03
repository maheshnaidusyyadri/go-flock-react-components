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
import CenteredColumn from "../Common/CenteredColumn";

interface ExpenseMember {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  isPaidBy: boolean;
  profileImg?: string;
  phoneNumber?: string;
  phone?: string;
}

const AddExpensePresenter: React.FC<EventAddExpenseProps> = ({
  profile,
  event,
  addTransaction,
}) => {
  const [] = useState<EventVisibility>();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [eventMemberList, setEventMemberList] = useState<EventMember[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFromPaidBy, setIsFromPaidBy] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<ExpenseMember[]>([]);
  const [selectedEqallAmount, setSelectedEqallAmount] = useState<
    ExpenseMember[]
  >([]);
  const [selectedPaidBy, setselectedPaidBy] = useState<ExpenseMember>();
  const [selectedAmount, setTotalAmount] = useState<number>(0);
  const [sumOfSelectedAmt, setSumOfSelectedAmt] = useState<number>(0);
  const [selectedSegment, setSelectedSegment] = useState<
    "equal" | "amount" | "percentage"
  >("equal");

  const [, setIsLoading] = useState<boolean>(false);
  const [, setError] = useState<string | null>(null);

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
      let totalSelectedAmount = selectedMembers.map((total: any) => {
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
      console.log("sumOfSelectedAmount", typeof sumOfSelectedAmount);
      console.log("selectedAmount", typeof selectedAmount);
      console.log(Number(sumOfSelectedAmount) === Number(selectedAmount));
      console.log(sumOfSelectedAmount !== selectedAmount);

      setSumOfSelectedAmt(sumOfSelectedAmount);
      // const tolerance = 0.01;
      // if (Math.abs(sumOfSelectedAmount - selectedAmountInt) > tolerance) {
      //   setShowError(true);
      //   return;
      // }
      if (Number(sumOfSelectedAmount) !== Number(selectedAmount)) {
        setShowError(true);
        return;
      }
    } else if (currentStep === 1) {
      const validSelectedAmount = selectedAmount;

      const shareAmount =
        selectedMembers.length > 0
          ? validSelectedAmount / selectedMembers.length
          : 0;

      selectedMembers.forEach((memberItem: ExpenseMember) => {
        memberItem.amount = getDecimalValue(shareAmount);
        memberItem.percentage =
          validSelectedAmount > 0
            ? getDecimalValue((shareAmount / validSelectedAmount) * 100)
            : 0;
      });
      const sumOfSelectedAmount = selectedMembers.reduce(
        (acc: number, curr: any) => acc + parseFloat(curr.amount),
        0
      );

      console.log("shareAmount", shareAmount);
      console.log("selectedMember after distribution", selectedMembers);
      console.log(
        "sumOfSelectedAmount after distribution",
        sumOfSelectedAmount
      );

      const remainingAmount = validSelectedAmount - sumOfSelectedAmount;

      console.log("remainingAmount to be adjusted", remainingAmount);

      const isSelectedPaidByInList = selectedMembers.some(
        (member: ExpenseMember) => member.id === selectedPaidBy?.id
      );

      let updatedSelectedMember = [...selectedMembers];

      if (isSelectedPaidByInList) {
        updatedSelectedMember = selectedMembers.map((member: any) => {
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
        updatedSelectedMember[0].amount =
          updatedSelectedMember[0].amount + remainingAmount;
        const updatedFirstMemberPercentage =
          (updatedSelectedMember[0].amount / validSelectedAmount) * 100;
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
    setEventMemberList(event.members);
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
      setselectedPaidBy(undefined);
      trigger();
    } else {
      setValue("splitAmong", null);
      setSelectedMembers([]);
      trigger();
    }
    setIsOpen(false);
  };

  const handleRemove = (memberToRemove: EventMember) => {
    console.log("memberToRemove", memberToRemove);
    const updatedMembers = selectedMembers.filter(
      (member) => member.id !== memberToRemove.id
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
    let transaction: Transaction = {
      eventId: event.id,
      deleted: false,
      description: formData.billName,
      amount: parseFloat(formData.totalAmount),
      date: new Date().toISOString(),
      paidUserId: selectedPaidBy?.id!,
      splitAmongUserIds: [],
      currency: "USD",
      addedByUserId: profile.id,
    };
    if (selectedMembers && selectedMembers.length > 0) {
      transaction.splitAmongUserIds = selectedMembers.map((member) => ({
        //UserSplit
        userId: member.id,
        amount: member.amount as number,
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
    const updatedMembers = [...selectedMembers];
    updatedMembers[index] = {
      ...updatedMembers[index],
      amount: amount,
      percentage: updatedPercentage, // Update corresponding percentage
    };
    setSelectedMembers(updatedMembers);
  };
  // Function to handle changes in the percentage input
  const handlePercentageChange = (value: string, index: number) => {
    const percentage = parseFloat(value) || 0;
    const updatedAmount = ((selectedAmount || 0) * percentage) / 100;
    const updatedMembers = [...selectedMembers];
    updatedMembers[index] = {
      ...updatedMembers[index],
      percentage: percentage,
      amount: updatedAmount, // Update corresponding dollar amount
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
        <IonGrid>
          <CenteredColumn>
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
                    {selectedMembers.map((eventMember: ExpenseMember) => (
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
                            src={
                              unselect.src ||
                              (unselect.value as unknown as string) ||
                              (unselect as unknown as string)
                            }
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
                      <IonImg
                        src={
                          EqualIcon.src ||
                          (EqualIcon.value as unknown as string) ||
                          (EqualIcon as unknown as string)
                        }
                      />
                    </IonSegmentButton>
                    <IonSegmentButton value="amount">
                      <IonImg
                        src={
                          DollarIcon.src ||
                          (DollarIcon.value as unknown as string) ||
                          (DollarIcon as unknown as string)
                        }
                      />
                    </IonSegmentButton>
                    <IonSegmentButton value="percentage">
                      <IonImg
                        src={
                          PercentIcon.src ||
                          (PercentIcon.value as unknown as string) ||
                          (PercentIcon as unknown as string)
                        }
                      />
                    </IonSegmentButton>
                  </IonSegment>

                  {selectedSegment === "equal" && (
                    <IonRow id="home-page">
                      <IonCol size="12">
                        <IonList className="list_wrap">
                          {selectedEqallAmount.map((Item, index) => (
                            <IonItem
                              key={index}
                              className="user_item"
                            >
                              <IonThumbnail
                                slot="start"
                                className="dp"
                              >
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
                          {selectedMembers.map((Item, index) => (
                            <IonItem
                              key={index}
                              className="user_item"
                            >
                              <IonThumbnail
                                slot="start"
                                className="dp"
                              >
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
                                  handleAmountChange(
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

                  {selectedSegment === "percentage" && (
                    <IonRow id="library-page">
                      <IonCol size="12">
                        <IonList className="list_wrap expense_tabs">
                          {selectedMembers.map((Item, index) => (
                            <IonItem
                              key={index}
                              className="user_item"
                            >
                              <IonThumbnail
                                slot="start"
                                className="dp"
                              >
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
                            {Math.abs(
                              selectedAmount - sumOfSelectedAmt
                            ).toFixed(2)}{" "}
                            {selectedAmount - sumOfSelectedAmt < 0
                              ? "exceeded"
                              : "left"}
                            )
                          </IonText>
                        </IonLabel>
                      )}

                      {selectedSegment === "percentage" && (
                        <IonLabel className="contribution_alert">
                          {((sumOfSelectedAmt / selectedAmount) * 100).toFixed(
                            2
                          )}
                          % of 100%
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
                    {selectedMembers.map((Item, index) => (
                      <IonItem
                        key={index}
                        className="user_item"
                      >
                        <IonThumbnail
                          slot="start"
                          className="dp"
                        >
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
                          {Item.name || Item.phoneNumber || ""}
                        </IonLabel>
                        <IonText class="amout">${Item.amount}</IonText>
                      </IonItem>
                    ))}
                  </IonList>
                </IonGrid>
              )}
            </FormProvider>
          </CenteredColumn>
        </IonGrid>
        <div className="ion-hide-md-down ion-padding-top">
          <CenteredColumn>
            <IonRow>
              {currentStep > 1 && (
                <IonCol>
                  <IonButton
                    className="primary-btn actions rounded"
                    onClick={prevStep}
                    expand="block"
                  >
                    Previous
                  </IonButton>
                </IonCol>
              )}
              {currentStep !== totalSteps && (
                <IonCol>
                  <IonButton
                    className="primary-btn actions rounded"
                    onClick={handleSubmit(nextStep, onError)}
                    expand="block"
                  >
                    Next
                  </IonButton>
                </IonCol>
              )}
              {currentStep === totalSteps && (
                <IonCol>
                  <IonButton
                    className="primary-btn save rounded"
                    onClick={handleSubmit(handleSave, onError)}
                    expand="block"
                  >
                    Save & Back To Home
                  </IonButton>
                </IonCol>
              )}
            </IonRow>
          </CenteredColumn>
        </div>
      </IonContent>
      <IonFooter className="ion-padding ion-hide-md-up">
        <IonRow>
          {currentStep > 1 && (
            <IonCol>
              <IonButton
                className="primary-btn actions rounded"
                onClick={prevStep}
                expand="block"
              >
                Previous
              </IonButton>
            </IonCol>
          )}
          {currentStep !== totalSteps && (
            <IonCol>
              <IonButton
                className="primary-btn actions rounded"
                onClick={handleSubmit(nextStep, onError)}
                expand="block"
              >
                Next
              </IonButton>
            </IonCol>
          )}
          {currentStep === totalSteps && (
            <IonCol>
              <IonButton
                className="primary-btn save rounded"
                onClick={handleSubmit(handleSave, onError)}
                expand="block"
              >
                Save & Back To Home
              </IonButton>
            </IonCol>
          )}
        </IonRow>
      </IonFooter>
      <IonGrid className={`custom-modal ${isOpen ? "open" : ""}`}>
        {true && (
          <>
            <SelectMembers
              title={isFromPaidBy ? "Who paid" : "Choose members"}
              members={eventMemberList}
              isMultiple={!isFromPaidBy}
              onMemberSelect={handleMemberSelect}
              modalClose={handleClose}
            />
            <IonFooter className="stickyFooter hasFooter">
              <CenteredColumn>
                <IonButton
                  className="primary-btn rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Done
                </IonButton>
              </CenteredColumn>
            </IonFooter>
          </>
        )}
      </IonGrid>
    </IonPage>
  );
};

export default AddExpensePresenter;
