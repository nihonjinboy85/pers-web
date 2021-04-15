import { useParams } from 'react-router-dom';

export default function AccountPage(props) {
  const { name } = useParams();
  const account = props.location.state.account;

  return (
    <>
      <h1>I'm the account page for {name}</h1>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {account.transactions.map((transaction, key) => {
            return (
              <tr key={key}>
                <td>{transaction.date.toUTCString()}</td>
                <td>{transaction.description}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}
