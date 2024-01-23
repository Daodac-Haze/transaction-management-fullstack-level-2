export type Account = {
  account_id: string;
  balance: number;
};

export type Transaction = {
  transaction_id: string;
  account_id: string;
  amount: number;
  type?: string;
  current_account_balance: number;
};
