import React from 'react';
import { Route, Switch } from 'react-router';
import { Nav } from './Nav';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Footer } from './Footer';
import { Recipe } from '../screens/Recipe';
// import { Link } from 'react-router-dom';
// import { RecipeDialog } from './RecipeDialog';
import { Profile } from '../screens/Profile';
import { Recipes } from '../screens/Recipes';

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
        </Switch>
        {/* <RecipeDialog trigger = {trigger} onClose={onClose}/> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
