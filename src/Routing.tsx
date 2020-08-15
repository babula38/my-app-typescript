import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TodoPage from './Features/Todo/TodoPage';
import HomePage from './Features/Home/HomePage';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/todo/:id">
          <TodoPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
