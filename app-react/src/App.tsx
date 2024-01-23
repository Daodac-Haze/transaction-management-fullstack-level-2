import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TransactionsContainer from "./components/TransactionsContainer";
import { TransactionHistoryGroup } from "./types/types";

function App() {
  const [transactions, setTransactions] = useState<TransactionHistoryGroup[]>(
    []
  );
  const getTransactions = useCallback(async () => {
    await fetch("http://localhost:5000/transactions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <div className="App">
      <div className="page-container">
        <Form onComplete={getTransactions} />
        <TransactionsContainer transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
