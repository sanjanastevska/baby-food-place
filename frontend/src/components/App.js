import React from 'react';
import { Route, Switch } from 'react-router';
import { Nav } from './Nav';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Footer } from './Footer';
import { Recipe } from '../screens/Recipe';

export function App() {

  return (
    <div className="grid-container">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/recipes/:id" component={Recipe}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
