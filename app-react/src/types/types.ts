export type Transaction = {
  transactionAccountId: string;
  transactionAmount: string;
  currentAccountBalance: string;
  type: string;
};

export type TransactionItem = {
  transactionAccountId: string;
  transactionAmount: number;
  targetNewBalance: number;
  type: string;
  transactionType: string;
  index: number;
};

export type TransactionHistoryGroup = {
  amount: number;
  account_id: string;
  transaction_id: string;
  type: string;
  current_account_balance: number;
  index: number;
};

export type FormElements = HTMLFormControlsCollection & {
  accountId: HTMLInputElement;
  amount: HTMLInputElement;
};

export type NewTransaction = HTMLFormElement & {
  readonly elements: FormElements;
};

export type NewTransactionResult = {
  transactionAccountId: string;
  transactionAmount: string;
  accountBalance: string;
};

export type Element = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
  dataType: string;
  type: string;
};
