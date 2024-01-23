import { TransactionItem as TTransactionItem } from "../types/types";

const TransactionItem = (item: TTransactionItem) => {
  return (
    <div>
      <div
        className="transaction-item"
        data-type={`${item.type}`}
        data-account-id={`${item.transactionAccountId}`}
        data-amount={`${item.transactionAmount}`}
        data-balance={`${item.targetNewBalance}`}
      >
        {item.transactionType === "withdrawal" ? (
          <>
            {`Transferred ${item.transactionAmount}$ from account ${item.transactionAccountId}`}
            {item.index === 0 && (
              <p>The current account balance is {item.targetNewBalance}$</p>
            )}
          </>
        ) : (
          <>
            <p>{`Transferred ${item.transactionAmount}$ to account ${item.transactionAccountId}`}</p>
            {item.index === 0 && (
              <p>The current account balance is {item.targetNewBalance}$</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionItem;
