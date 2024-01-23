import { Request, Response } from "express";
import {
  updateExistingAccount,
  createNewTransaction,
  getTransactionHistory,
  findTransactionById,
  findAccountById,
} from ".";
import { validateUUID } from "../utils";

export const transactionsPost = (req: Request, res: Response) => {
  const { account_id, amount } = req.body;
  const parsedAmount = parseInt(amount);

  if (!validateUUID(account_id)) {
    return res.json({ error: "account id format invalid" });
  }
  if (Number.isNaN(parsedAmount)) {
    return res.json({ error: "amount format is invalid" });
  }
  const isNegative = parsedAmount < 0 ? "withdrawal" : "deposit";
  const account = updateExistingAccount(account_id, parsedAmount);
  const body = createNewTransaction(account, parsedAmount, isNegative);

  res.set("Content-Type", "application/json");
  res.status(201).json(body);
};

export const transactionsGet = (req: Request, res: Response) => {
  res.set("Content-Type", "application/json");
  res.json(getTransactionHistory());
};

export const transactionsGetById = (req: Request, res: Response) => {
  const transactionById = findTransactionById(req.params.transactionId);
  res.set("Content-Type", "application/json");
  res.status(200).json(transactionById);
};
