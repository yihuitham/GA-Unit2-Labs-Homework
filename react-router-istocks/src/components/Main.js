import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";
import Stock from "./Stock";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/stocks" component={Dashboard} />
        <Route exact path="/stocks/:symbol" component={Stock} />
      </Switch>
    </main>
  );
}

export default Main;
