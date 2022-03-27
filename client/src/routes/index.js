// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
// import Dashboard from "../screens/Dashboard";
import Visit from "../screens/Visit";
import Table from "../components/Table";
import Admin from "../layouts/Admin";
import ComingSoon from "../components/ComingSoon";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/visits">
          <Admin component={Visit} />
        </Route>
        <Route exact path="/dashboard">
          <Admin component={Table} />
        </Route>
        <Route exact path="/sentences">
          <Admin component={ComingSoon} />
        </Route>
        <Route exact path="/notes">
          <Admin component={ComingSoon} />
        </Route>
        <Route exact path="/calendar">
          <Admin component={ComingSoon} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
