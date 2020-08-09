import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info/:id' component={MovieInfo} />
      </Switch>
    </Router>
  );
};

export default Routes;
