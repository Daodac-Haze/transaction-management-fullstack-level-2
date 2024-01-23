import { TransactionHistoryGroup } from "../types/types";
import TransactionItem from "./TransactionItem";

const Transaction = ({
  amount,
  account_id,
  transaction_id,
  type,
  current_account_balance,
  index,
}: TransactionHistoryGroup) => {
  return (
    <>
      <div className="grouped-transactions">
        <TransactionItem
          targetNewBalance={current_account_balance}
          transactionAccountId={account_id}
          type="transaction"
          index={index}
          transactionType={type}
          transactionAmount={amount}
          key={transaction_id}
        ></TransactionItem>
      </div>
    </>
  );
};

export default Transaction;
