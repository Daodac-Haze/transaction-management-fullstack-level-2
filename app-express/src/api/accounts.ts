import { Request, Response } from "express";
import { findAccountById } from ".";

export const accountsGetById = (req: Request, res: Response) => {
  const accountById = findAccountById(req.params.accountId);
  res.set("Content-Type", "application/json");
  res.status(200).json(accountById);
};
