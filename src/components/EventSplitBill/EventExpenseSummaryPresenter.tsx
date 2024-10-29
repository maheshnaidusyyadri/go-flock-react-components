import React, { useState } from "react";
import { EventExpenseSummaryProps } from "@goflock/types/src/index";
import "./EventSplitBillPresenter.scss";

import Footer from "../Footer/Footer";
import {
  IonButton,
  IonCard,
  IonContent,
  IonFooter,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
} from "@ionic/react";
import Header from "../Header/Header";
import EditIcon from "../../images/icons/Edit.svg";
import DeleteIcon from "../../images/icons/Delete.svg";
import Bill from "../../images/bill.svg";

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

      <IonContent className="event_transactions">
        <IonSegment
          value={selectedSegment}
          onIonChange={(e) =>
            setSelectedSegment(e.detail.value as "transactions" | "expenses")
          }
        >
          <IonSegmentButton value="transactions">Transactions</IonSegmentButton>
          <IonSegmentButton value="expenses">Expense Summary</IonSegmentButton>
        </IonSegment>

        {selectedSegment === "transactions" && (
          <IonContent className="transactions">
            <IonCard className="transactions_cnt">
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <IonList key={transaction.id} className="transaction_list">
                    <IonItem className="transaction_item">
                      <IonLabel class="transaction_name">
                        {transaction.description}
                      </IonLabel>
                      <IonLabel class="transaction_actions">
                        <IonButton
                          className="icon_btn"
                          onClick={() =>
                            onUpdateTransaction(event.id, transaction.id!)
                          }
                          disabled={isLoading}
                        >
                          <IonImg src={EditIcon} />
                        </IonButton>
                        <IonButton
                          className="icon_btn"
                          onClick={() =>
                            handleDeleteTransaction(transaction.id!)
                          }
                          disabled={isLoading}
                        >
                          <IonImg src={DeleteIcon} />
                        </IonButton>
                      </IonLabel>
                    </IonItem>

                    <IonItem className="contributor_list">
                      <IonLabel className="contributor_name">
                        {transaction.paidUserId}
                      </IonLabel>
                      <IonText className="contribution">
                        ${transaction.amount}
                      </IonText>
                    </IonItem>
                  </IonList>
                ))
              ) : (
                <>
                  <IonImg
                    className="ion-img"
                    alt="No transactions found"
                    src={Bill}
                  />
                  <IonText className="nodata">No transactions found</IonText>
                </>
              )}
            </IonCard>
          </IonContent>
        )}

        {selectedSegment === "expenses" && (
          <IonContent className="transactions">
            <IonCard className="transactions_cnt">
              {expenses.length > 0 ? (
                expenses.map((expense) => (
                  <IonItem key={expense.userId} className="contributor_list">
                    <IonLabel className="contributor_name">
                      {expense.name}
                    </IonLabel>
                    <IonText className="contribution">
                      ${expense.amount.toFixed(2)}
                    </IonText>
                  </IonItem>
                ))
              ) : (
                <>
                  <IonImg
                    className="ion-img"
                    alt="No expenses found"
                    src={Bill}
                  />
                  <IonText className="nodata">No expenses found</IonText>
                </>
              )}
            </IonCard>
          </IonContent>
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
