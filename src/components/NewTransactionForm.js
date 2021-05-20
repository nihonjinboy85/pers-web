import { useParams } from 'react-router-dom';

export default function NewTransactionForm() {
  const { name } = useParams();

  const submitForm = (e) => {
    e.preventDefault();
    alert('Form submitted');
  }

  return (
    <>
      <form action={`/accounts/${name}`} method="GET">
        <label htmlFor="transaction-date">Date</label>
        <input id="transaction-date" name="transaction-date" type="date" required />
        <label htmlFor="transaction-desc">Description</label>
        <input id="transaction-desc" name="transaction-desc" type="text" required />
        <label htmlFor="transaction-type">Type</label>
        <select id="transaction-type" name="transaction-type" required>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
        <label htmlFor="transaction-amount">Amount</label>
        <input id="transaction-amount" name="transaction-amount" type="number" required />
        <button type="submit" onClick={e => submitForm(e)}>Add transaction</button>
      </form>
    </>
  )
}