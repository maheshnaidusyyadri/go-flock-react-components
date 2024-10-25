import React, { useState } from "react";
import { EventSplitBillProps, Transaction } from "@goflock/types/src/index";
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
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
} from "@ionic/react";
import Header from "../Header/Header";
import EditIcon from "../../images/icons/Edit.svg";
import DeleteIcon from "../../images/icons/Delete.svg";
import Bill from "../../images/bill.svg";

const EventSplitBillPresenter: React.FC<EventSplitBillProps> = ({
  event,
  transactions = [], // Default to empty array if undefined
  addTransaction,
  updateTransaction,
  deleteTransaction,
  expenses = [], // Default to empty array if undefined
}) => {
  const [newTransaction, setNewTransaction] = useState<Transaction>({
    id: "",
    eventId: event.id,
    deleted: false,
    description: "",
    amount: 0,
    date: new Date().toISOString(),
    paidUserId: "", // Initialize with empty payer
    splitAmongUserIds: [], // Initialize with empty participants
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddTransaction = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await addTransaction(newTransaction);
      setNewTransaction({
        id: "",
        eventId: event.id,
        deleted: false,
        description: "",
        amount: 0,
        date: new Date().toISOString(),
        paidUserId: "",
        splitAmongUserIds: [],
      });
    } catch (err) {
      setError("Failed to add transaction");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTransaction = async (transaction: Transaction) => {
    setIsLoading(true);
    setError(null);
    try {
      await updateTransaction(transaction);
    } catch (err) {
      setError("Failed to update transaction");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTransaction = async (transactionId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteTransaction(transactionId);
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
      {/* <h2>Split Bill for {event.name}</h2> */}
      <IonContent className="event_transactions">
        <IonTabs className="ion-tabs">
          <IonTabBar slot="top" className="ion-tab-bar">
            <IonTabButton tab="Transactions" className="ion-tab">
              Transactions
            </IonTabButton>
            <IonTabButton tab="Expense" className="ion-tab">
              Expense Summary
            </IonTabButton>
          </IonTabBar>
          <IonTab tab="Transactions">
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
                            onClick={() => handleUpdateTransaction(transaction)}
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
                      alt="Successfully Created Event"
                      src={Bill}
                    />
                    <IonText className="nodata">No transactions found</IonText>
                  </>
                )}
              </IonCard>
            </IonContent>
          </IonTab>
          <IonTab tab="Expense">
            <IonContent className="transactions">
              <IonCard className="transactions_cnt">
                {expenses.length > 0 ? (
                  expenses.map((expense) => (
                    <IonItem key={expense.userId} className="contributor_list">
                      <IonLabel className="contributor_name">
                        {expense.name}
                      </IonLabel>
                      <IonText className="contribution">
                        ${expense.amount.toFixed(2)}100
                      </IonText>
                    </IonItem>
                  ))
                ) : (
                  <>
                    <IonImg
                      className="ion-img"
                      alt="Successfully Created Event"
                      src={Bill}
                    />
                    <IonText className="nodata">No expenses found</IonText>
                  </>
                )}
              </IonCard>
            </IonContent>
          </IonTab>
        </IonTabs>
      </IonContent>
      {/* <h3>Add New Transaction</h3> */}
      {/* <input
        type="text"
        placeholder="Description"
        value={newTransaction.description}
        onChange={(e) =>
          setNewTransaction({
            ...newTransaction,
            description: e.target.value,
          })
        }
      />
      <input
        type="number"
        placeholder="Amount"
        value={newTransaction.amount}
        onChange={(e) =>
          setNewTransaction({
            ...newTransaction,
            amount: parseFloat(e.target.value),
          })
        }
      />
      <input
        type="text"
        placeholder="Payer"
        value={newTransaction.paidUserId}
        onChange={(e) =>
          setNewTransaction({ ...newTransaction, paidUserId: e.target.value })
        }
      /> */}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <IonFooter class="stickyFooter hasFooter">
        <IonButton
          className="primary-btn rounded"
          onClick={handleAddTransaction}
          // disabled={
          //   isLoading || !newTransaction.description || newTransaction.amount <= 0
          // }
        >
          Add Transaction
        </IonButton>
      </IonFooter>

      <Footer eventId={event.id} activeTab={"bills"} />
    </IonPage>
  );
};

export default EventSplitBillPresenter;
