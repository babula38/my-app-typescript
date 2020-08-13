import React from 'react';
import TodoPage from './Features/Todo/TodoPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestPage from './Features/Todo/TestPage';

function App() {
  return (
    <Router>
      <Switch>
        {/* <ul>
          <li>
            <Link to="/todo">todo</Link>
          </li>
        </ul> */}
        <Route path="/todo/:id">
          <TodoPage />
        </Route>        
        <Route path="/home">
          <TestPage />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
