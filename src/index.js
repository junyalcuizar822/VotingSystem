import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css"

const VotingApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </Router>
  );
};

render(<VotingApp />, document.querySelector("#root"));
