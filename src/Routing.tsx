import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './Features/Home/HomePage';
import TestPage from 'Features/ControllerTest/TestPage';
import TodoPage from 'Features/Todo/Index';
// import * as TodoPage from 'Features/Todo/Index';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/test/:id">
          <TestPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route exact path="/" component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default Routing;
