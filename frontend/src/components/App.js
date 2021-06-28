import React from 'react';
import { Route, Switch } from 'react-router';
import { Nav } from './Nav';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Footer } from './Footer';
import { Profile } from '../screens/Profile';
import { Recipes } from '../screens/Recipes';
import { Recipe } from '../screens/Recipe';
import { Breakfest } from '../screens/Breakfest';
import { Brunch } from '../screens/Brunch';
import { Lunch } from '../screens/Lunch';
import { Dinner } from '../screens/Dinner';

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
          <Route path="/profile" component={Profile}></Route>
          <Route path="/recipes" component={Recipes}></Route>
          <Route path="/breakfast" component={Breakfest}></Route>
          <Route path="/brunch" component={Brunch}></Route>
          <Route path="/lunch" component={Lunch}></Route>
          <Route path="/dinner" component={Dinner}></Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
