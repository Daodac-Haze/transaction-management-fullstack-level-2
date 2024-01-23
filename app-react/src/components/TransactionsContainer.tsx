import Transaction from "./Transaction";
import { TransactionHistoryGroup } from "../types/types";

interface Props {
  transactions: TransactionHistoryGroup[];
}

const TransactionsContainer = ({ transactions }: Props) => {
  return (
    <>
      <div className="transactions-container">
        {transactions.map((item, i) => (
          <Transaction
            account_id={item.account_id}
            amount={item.amount}
            transaction_id={item.transaction_id}
            type={item.type}
            index={i}
            current_account_balance={item.current_account_balance}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default TransactionsContainer;
