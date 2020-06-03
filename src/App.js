// Libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import AppTest from "./AppTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppTest} />

        <Route component={() => <h1>404 page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
