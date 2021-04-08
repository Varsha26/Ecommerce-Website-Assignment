import { Route, Switch } from 'react-router';
import './App.css';
import { Header } from './pages/Header/header.component';
import HomePage from './pages/Home/HomePage';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
