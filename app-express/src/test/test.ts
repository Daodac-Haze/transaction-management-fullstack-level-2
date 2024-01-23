import { createNewTransaction } from "../api";
import { Transaction } from "../types";

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message || "Test failed");
  }
}

function testCreateNewTransaction() {
  const accountId = "e428ec93-bc79-4772-b39b-68ed67346ddf";
  const amount = 500;
  const type = "deposit";
  const transactionHistory: Transaction[] = [];

  const testedTransaction = createNewTransaction(
    { account_id: accountId, balance: amount },
    amount,
    type
  );
  transactionHistory.push(testedTransaction);
  const expectedTransaction = {
    account_id: accountId,
    amount: amount,
    transaction_id: testedTransaction?.transaction_id,
    type: type,
    current_account_balance: 500,
  };

  // Assert that function result is correct
  assert(
    JSON.stringify(testedTransaction) === JSON.stringify(expectedTransaction),
    "createNewTransaction returned incorrect result"
  );

  // Assert that transaction has been added to the start of transactionHistory
  assert(
    JSON.stringify(transactionHistory[0]) === JSON.stringify(testedTransaction),
    "createNewTransaction did not add transaction correctly to transactionHistory"
  );
}

testCreateNewTransaction();
