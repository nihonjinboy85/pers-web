import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import OverviewPage from './pages/OverviewPage';
import AccountsPage from './pages/AccountsPage';
import TransactionsPage from './pages/TransactionsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Route path="/" component={OverviewPage} exact />
          <Route path="/accounts" component={AccountsPage} />
          <Route path="/transactions" component={TransactionsPage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
