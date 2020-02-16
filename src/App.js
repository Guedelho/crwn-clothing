import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter as Router,
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

import './App.css';

let ShopPage = ({ location }) => {
  const pageName = location.pathname.split('/')[2];

  return (
    <div>
      <h1>{pageName.toUpperCase()} PAGE</h1>
    </div>
  );
}

ShopPage = withRouter(ShopPage);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
