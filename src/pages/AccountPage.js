import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'; 

import NewTransactionForm from '../components/NewTransactionForm';

export default function AccountPage(props) {
  const { name } = useParams();
  const account = props.location.state.account;

  return (
    <BrowserRouter>
      <h1>I'm the account page for {name}</h1>
      <h2>Transactions</h2>
      <DragDropContext>
        <Droppable droppableId="transactions">
          {(provided) => (
            <ul className="transactions" {...provided.droppableProps} ref={provided.innerRef}>
              {account.transactions.map(({ id, date, description, type, amount }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        Date: {date.toUTCString()}, 
                        Description: {description}, 
                        Type: {type}, 
                        Amount: ${amount}
                      </li>
                    ))}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <Route path="/accounts/:name/newTransaction" component={NewTransactionForm} />
      <Link to={`/accounts/${name}/newTransaction`}>
        <button>Add new transaction</button>
      </Link>
    </BrowserRouter>
  );
}
