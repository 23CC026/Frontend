import TransactionCard from "./TransactionCard";

const TransactionList = (props) => {
  return (
    <>
      <h5>Transactions</h5>
      <hr />
      {props.transactions.map((transaction, index) => (
        <TransactionCard 
          key={index} 
          title={transaction.title} 
          amount={transaction.amount} 
          index={index}  // Pass index here
          removeFromList={props.removeFromList} 
        />
      ))}
    </>
  );
};

export default TransactionList;