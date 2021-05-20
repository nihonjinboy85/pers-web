import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import OverviewPage from './pages/OverviewPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Route path="/" component={OverviewPage} exact />
          <Route path="/accounts/:name" component={AccountPage} exact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
