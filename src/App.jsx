import { useState, useEffect } from "react";
import TransactionList from "./components/TransactionList";
import NewTxnForm from "./components/NewTxnForm";
import IncExpContainer from "./components/IncExpContainer";
import axios from "axios";

const App = () => {
  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get("https://mern-1-gexz.onrender.com/api/expenses");
      console.log(response.data);
      setTransactions(response.data);

    };

    fetchData();
  }, []);


  const addToList = async (title, amount) => {
    try {
      const response = await axios.post("https://mern-1-gexz.onrender.com/api/expenses", {
        title,
        amount,
      });


      setTransactions((prevTransactions) => [
        ...prevTransactions,
        response.data,
      ]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };


  const removeFromList = (index) => {
    const newTransactions = transactions.filter((txn, i) => i !== index);
    setTransactions(newTransactions);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <IncExpContainer transactions={transactions} />
      <TransactionList transactions={transactions} removeFromList={removeFromList} />
      <NewTxnForm addToList={addToList} />
    </div>
  );
};

export default App;