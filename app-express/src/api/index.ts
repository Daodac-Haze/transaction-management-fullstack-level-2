import express, { Request, Response } from "express";
import { generateTransactionId } from "../utils";
import {
  transactionsPost,
  transactionsGet,
  transactionsGetById,
} from "./transactions";
import { accountsGetById } from "./accounts";
import { Account, Transaction } from "../types";

const router = express.Router();

const accounts: Account[] = [];
const transactionHistory: Transaction[] = [];

export const createNewAccount = (account_id: string, amount: number) => {
  const account = {
    account_id: account_id,
    balance: amount,
  };
  accounts.push(account);
  return account;
};

export const updateExistingAccount = (account_id: string, amount: number) => {
  const existingAccount = findAccountById(account_id);
  if (existingAccount) {
    existingAccount.balance += amount;
    return existingAccount;
  }
  return createNewAccount(account_id, amount);
};
export const getTransactionHistory = () => {
  return transactionHistory;
};

export const createNewTransaction = (
  account: Account,
  amount: number,
  type: string
) => {
  const transaction = {
    account_id: account.account_id,
    amount: amount,
    transaction_id: generateTransactionId(),
    type: type,
    current_account_balance: account.balance,
  };
  transactionHistory.unshift(transaction);
  return transaction;
};

export const findAccountById = (account_id: string) => {
  return accounts.find((item) => item.account_id == account_id);
};

export const findTransactionById = (transaction_id: string) => {
  return transactionHistory.find(
    (item) => item.transaction_id == transaction_id
  );
};

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

router.post("/transactions", transactionsPost);

router.get("/transactions", transactionsGet);

router.get("/transactions/:transactionId", transactionsGetById);

router.get("/accounts/:accountId", accountsGetById);

export default router;
