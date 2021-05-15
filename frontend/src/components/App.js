import React from 'react';
import { Route, Switch } from 'react-router';
import { Nav } from './Nav';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

export function App() {

  return (
    <div className="grid-container">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path="/" component={ Home } exact></Route>
          <Route path="/login" component={ Login }></Route>
          <Route path="/register" component={ Register }></Route>
        </Switch>
      </main>
      {/* <footer className="row center">
        <div>
          <h1>Baby's</h1>
          <h5>food place</h5>
        </div>
        <ul>
          <li>BREAKFEST</li>
          <li>BRUNCH</li>
          <li>LUNCH</li>
          <li>DINNER</li>
        </ul>
        <p>Baby's Food Place copyright © 2021</p>
      </footer> */}
    </div>
  );
}
