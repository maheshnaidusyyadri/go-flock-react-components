import React, { useState } from "react";
import { EventExpenseSummaryProps } from "@goflock/types/src/index";
import "./EventSplitBillPresenter.scss";
import Footer from "../Footer/Footer";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
} from "@ionic/react";
import Header from "../Header/Header";
import EditIcon from "../../images/icons/Edit.svg";
import DeleteIcon from "../../images/icons/Delete.svg";
import EmptyBill from "../Common/Icons/EmptyBill";

const EventExpenseSummaryPresenter: React.FC<EventExpenseSummaryProps> = ({
  event,
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
  const [error, setError] = useState<string | null>(null);

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
    <IonPage>
      <Header
        title={`Split Bill ${event.name}`}
        showMenu={false}
        showContactList={false}
        showProfile={true}
      />
      <IonContent className="event_transactions ion-padding">
        <IonSegment
          className="segment_tabs"
          value={selectedSegment}
          onIonChange={(e) =>
            setSelectedSegment(e.detail.value as "transactions" | "expenses")
          }
        >
          <IonSegmentButton value="transactions">
            <IonLabel>Transactions</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="expenses">
            <IonLabel>Expense Summary</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {selectedSegment === "transactions" && (
          <IonGrid className="transactions-cnt ion-no-margin ion-no-padding">
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <IonRow>
                  <IonCol className="ion-padding-top">
                    <IonList key={transaction.id} className="transaction-list">
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
                          <IonLabel class="action-btns" slot="end">
                            <IonButton
                              className="icon-btn"
                              onClick={() =>
                                onUpdateTransaction(event.id, transaction.id!)
                              }
                              disabled={isLoading}
                            >
                              <IonImg src={EditIcon} />
                            </IonButton>
                            <IonButton
                              className="icon-btn"
                              onClick={() =>
                                handleDeleteTransaction(transaction.id!)
                              }
                              disabled={isLoading}
                            >
                              <IonImg src={DeleteIcon} />
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
                          <h2>{expense.userId}</h2>
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
      </IonContent>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <IonFooter class="stickyFooter hasFooter">
        <IonButton
          className="primary-btn rounded"
          onClick={() => onCreateTransaction(event.id)}
        >
          Add Transaction
        </IonButton>
      </IonFooter>
      <Footer eventId={event.id} activeTab={"bills"} />
    </IonPage>
  );
};
export default EventExpenseSummaryPresenter;
