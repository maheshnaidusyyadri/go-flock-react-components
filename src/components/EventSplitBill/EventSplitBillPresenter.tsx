import React, { useState } from "react";
import { EventSplitBillProps, Transaction } from "@goflock/types/src/index";

const EventSplitBillPresenter: React.FC<EventSplitBillProps> = ({
  event,
  transactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  expenses,
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
    <div>
      <h2>Split Bill for {event.name}</h2>

      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>
              {transaction.description} - ${transaction.amount} by{" "}
              {transaction.paidUserId}
            </p>
            <button
              onClick={() => handleUpdateTransaction(transaction)}
              disabled={isLoading}
            >
              Update
            </button>
            <button
              onClick={() => handleDeleteTransaction(transaction.id!)}
              disabled={isLoading}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3>Add New Transaction</h3>
      <input
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
      />
      {/* Add inputs for participants and date as needed */}
      <button
        onClick={handleAddTransaction}
        disabled={
          isLoading || !newTransaction.description || newTransaction.amount <= 0
        }
      >
        Add Transaction
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Expense Summary</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.userId}>
            <p>
              {expense.name}: ${expense.amount.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventSplitBillPresenter;