import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "../home/homePage";
import projectPage from "../project/project";
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={homePage} />
      <Route exact path="/project/:id" component={projectPage} />
    </Switch>
  </Router>
);
export default Routes;
