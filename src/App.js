import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from '../src/pages/shop-page/shop-page.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop-page' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
