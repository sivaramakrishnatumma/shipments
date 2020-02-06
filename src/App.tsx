import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

export const App = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/details/:id" exact component={Details}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
