import { Link } from 'react-router-dom';

export default function OverviewPage() {

  const accounts = [
    { id: 1, name: 'USAA', balance: 0.00, transactions: [
      {
        id: '0',
        date: new Date('2021-05-01'), 
        recurrence: 'none', 
        amount: 250.00, 
        type: 'income', 
        description: 'Paycheck' 
      },
      {
        id: '1',
        date: new Date('2021-05-31'), 
        recurrence: 'monthly', 
        amount: 10.00, 
        type: 'expense', 
        description: 'Subscription' 
      }
    ]},
    { id: 2, name: 'Ally', balance: 100.25, transactions: [
      {
        id: '0',
        date: new Date('2021-05-01'), 
        recurrence: 'none', 
        amount: 250.00, 
        type: 'income', 
        description: 'Paycheck' 
      }
    ]}
  ];

  return (
    <>
      <h1>Account Overview</h1>
      {accounts.map(account => {
        return (
          <Link key={account.id} to={{ 
            pathname: `/accounts/${account.name}`, 
            state: { account: account }
          }}>
            <div className="card">
              <h2>{account.name}</h2>
              <p>Current balance: ${account.balance}</p>
            </div>
          </Link>
        )
      })}
    </>
  )
};
