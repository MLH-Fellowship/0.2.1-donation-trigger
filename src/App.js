// Libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Action from "./pages/Action";
import PushNotifTest from "./testing/PushNotifTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/action" component={Action} />
        <Route exact path="/test" component={PushNotifTest} />

        <Route component={() => <h1>404 page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
