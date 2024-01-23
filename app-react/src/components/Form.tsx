import { FormEvent, useState } from "react";
import FormElement from "./FormElement";
import { NewTransaction } from "../types/types";
interface Props {
  onComplete: () => void;
}
const Form = ({ onComplete }: Props) => {
  const [amount, setAmount] = useState("");
  const [accountId, setAccountId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: FormEvent<NewTransaction>) => {
    e.preventDefault();
    if (Number(amount) === 0) {
      return setErrorMessage("Value can not be 0");
    }
    if (accountId.length !== 36) {
      return setErrorMessage("Account id is not in the right format");
    }
    await fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        account_id: accountId,
        amount: Number(amount),
      }),
    })
      .then(() => {
        //refetch history
        setAmount("");
        setAccountId("");
        setErrorMessage("");
        onComplete();
      })
      .catch((err) => {
        setErrorMessage("something went wrong...");
        console.log(err);
      });
  };

  return (
    <>
      <div className="form-container">
        <h3>Submit new transaction</h3>
        <form onSubmit={handleSubmit} className="form-submit-new-transaction">
          <FormElement
            dataType="account-id"
            id="accountId"
            required={true}
            type="text"
            label="Account ID:"
            placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />
          <FormElement
            dataType="amount"
            id="amount"
            required={true}
            type="number"
            label="Amount:"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errorMessage && (
            <>
              <p className="error">{errorMessage}</p>
            </>
          )}
          <input data-type="transaction-submit" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
