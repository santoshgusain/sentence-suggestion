import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Visit from "../screens/Visit";
import AddSentense from "../screens/AddSentense";
import Table from "../components/Table";
import Admin from "../layouts/Admin";
import ComingSoon from "../components/ComingSoon";
import { Provider } from "react-redux";
import store from "../store";

function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/visits">
            <Admin component={Visit} />
          </Route>
          <Route exact path="/dashboard">
            <Admin component={Table} />
          </Route>
          <Route exact path="/sentences">
            <Admin component={Visit} />
          </Route>
          <Route exact path="/notes">
            <Admin component={Visit} />
          </Route>
          <Route exact path="/calendar">
            <Admin component={AddSentense} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <ComingSoon />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default Routes;
