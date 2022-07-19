import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Visit from "../screens/Visit";
import Sentence from "../screens/Sentence";
import Test from "../screens/Test";
import Note from "../screens/Note";
import Auth from "../screens/login";
import AddSentense from "../screens/AddSentense";
import Dashboard from "../screens/Dashboard";
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
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/visits">
            <Admin component={Visit} />
          </Route>
          <Route exact path="/dashboard">
            <Admin component={Dashboard} />
          </Route>
          <Route exact path="/sentences">
            <Admin component={Sentence} />
          </Route>
          <Route exact path="/test">
            <Admin component={Test} />
          </Route>
          <Route exact path="/notes">
            <Admin component={Note} />
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
