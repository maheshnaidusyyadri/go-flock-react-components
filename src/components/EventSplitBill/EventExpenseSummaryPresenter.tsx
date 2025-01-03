import React, { useState } from "react";
import { EventExpenseSummaryProps } from "@goflock/types/src/index";
import "./EventSplitBillPresenter.scss";
import Footer from "../Footer/Footer";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import Header from "../Header/Header";
import EditIcon from "../../images/icons/Edit.svg";
import DeleteIcon from "../../images/icons/Delete.svg";
import EmptyBill from "../Common/Icons/EmptyBill";
import { getDisplayName } from "../../utils/utils";
import CenteredColumn from "../Common/CenteredColumn";
import SideNavBar from "../Footer/SideNavBar";
import { add } from "ionicons/icons";

const EventExpenseSummaryPresenter: React.FC<EventExpenseSummaryProps> = ({
  event,
  eventRelation,
  transactions = [],
  deleteTransaction,
  expenses = [],
  onCreateTransaction,
  onUpdateTransaction,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "transactions" | "expenses"
  >("transactions");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setError] = useState<string | null>(null);

  const handleDeleteTransaction = async (transactionId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteTransaction(event.id, transactionId);
    } catch (err) {
      setError("Failed to delete transaction");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {(["admin", "owner"].includes(eventRelation?.visitType) ||
        (["member"].includes(eventRelation?.visitType) &&
          eventRelation?.rsvp &&
          eventRelation.rsvp?.response)) && (
        <SideNavBar
          event={event}
          activeTab="invitation"
          settings={event.settings}
          eventRelation={eventRelation}
        />
      )}
      <IonPage id="main-content">
        <Header
          eventId={event.id}
          title={`Expenses`}
          showMenu={false}
          showContactList={false}
          showGoBack={false}
          showLogo={true}
          logoPosition={"left"}
          className="sticky"
          event={event}
          eventRelation={eventRelation}
        />
        <IonContent className="event-transactions ion-padding-end ion-padding-start ion-padding-bottom">
          <IonGrid>
            <CenteredColumn>
              <IonSegment
                className="segment-tabs"
                value={selectedSegment}
                onIonChange={(e) =>
                  setSelectedSegment(
                    e.detail.value as "transactions" | "expenses"
                  )
                }
              >
                <IonSegmentButton value="transactions">
                  Transactions
                </IonSegmentButton>
                <IonSegmentButton value="expenses">
                  Expense Summary
                </IonSegmentButton>
              </IonSegment>

              {selectedSegment === "transactions" && (
                <IonGrid className="transactions-cnt ion-no-margin ion-no-padding">
                  {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                      <IonRow>
                        <IonCol className="ion-padding-top">
                          <IonList
                            key={transaction.id}
                            className="transaction-list"
                          >
                            <IonItem
                              className="transaction-item ion-no-margin"
                              lines="none"
                            >
                              <IonLabel class="transaction-info ion-no-margin">
                                <h2>{transaction.description}</h2>
                                <p>{transaction.paidUserId}</p>
                              </IonLabel>
                              <IonLabel
                                slot="end"
                                className="transaction-actions ion-no-margin"
                              >
                                <p>${transaction.amount}</p>
                                <IonLabel
                                  class="action-btns"
                                  slot="end"
                                >
                                  <IonButton
                                    className="icon-btn"
                                    onClick={() =>
                                      onUpdateTransaction(
                                        event.id,
                                        transaction.id!
                                      )
                                    }
                                    disabled={isLoading}
                                  >
                                    <IonImg
                                      src={
                                        EditIcon.src ||
                                        (EditIcon.value as unknown as string) ||
                                        (EditIcon as unknown as string)
                                      }
                                    />
                                  </IonButton>
                                  <IonButton
                                    className="icon-btn"
                                    onClick={() =>
                                      handleDeleteTransaction(transaction.id!)
                                    }
                                    disabled={isLoading}
                                  >
                                    <IonImg
                                      src={
                                        DeleteIcon.src ||
                                        (DeleteIcon.value as unknown as string) ||
                                        (DeleteIcon as unknown as string)
                                      }
                                    />
                                  </IonButton>
                                </IonLabel>
                              </IonLabel>
                            </IonItem>
                          </IonList>
                        </IonCol>
                      </IonRow>
                    ))
                  ) : (
                    <IonLabel className="ion-text-center">
                      <EmptyBill />
                      <IonText className="nodata ion-text-center">
                        No transactions found
                      </IonText>
                    </IonLabel>
                  )}
                </IonGrid>
              )}
              {selectedSegment === "expenses" && (
                <IonGrid className="transactions-cnt ion-no-margin ion-no-padding">
                  {expenses.length > 0 ? (
                    expenses.map((expense) => (
                      <IonRow>
                        <IonCol className="ion-padding-top">
                          <IonList className="transaction-list">
                            <IonItem
                              key={expense.userId}
                              className="transaction-item ion-no-margin"
                              lines="none"
                            >
                              <IonLabel className="transaction-info ion-no-margin">
                                <IonItem className="transaction-user">
                                  <IonThumbnail className="user-dp ion-no-margin">
                                    {expense && expense.name && (
                                      <IonAvatar className="profile-dp">
                                        {getDisplayName(expense?.name)}
                                      </IonAvatar>
                                    )}
                                    {/* <IonImg src={userDefault}></IonImg> */}
                                  </IonThumbnail>
                                  <h2>{expense.userId}</h2>
                                </IonItem>
                              </IonLabel>
                              <IonLabel
                                slot="end"
                                className="transaction-actions ion-no-margin"
                              >
                                <p>${expense.amount.toFixed(2)}</p>
                              </IonLabel>
                            </IonItem>
                          </IonList>
                        </IonCol>
                      </IonRow>
                    ))
                  ) : (
                    <IonLabel className="ion-text-center">
                      <EmptyBill />
                      <IonText className="nodata ">No expenses found</IonText>
                    </IonLabel>
                  )}
                </IonGrid>
              )}
              <IonRow className="ion-padding">
                <IonCol>
                  <IonButton
                    className="primary-btn rounded"
                    onClick={() => onCreateTransaction(event.id)}
                  >
                    <IonIcon
                      icon={add}
                      size="medium"
                    ></IonIcon>{" "}
                    Add Transaction
                  </IonButton>
                </IonCol>
              </IonRow>
            </CenteredColumn>
          </IonGrid>
        </IonContent>
        <Footer
          event={event}
          activeTab={"expenses"}
          settings={event.settings}
          eventRelation={eventRelation}
          className="ion-hide-md-up"
        />
      </IonPage>
    </>
  );
};
export default EventExpenseSummaryPresenter;
