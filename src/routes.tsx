import * as React from "react";
import { Router, Route, IndexRedirect } from "react-router";

import App from "./components/app";
import Home from "./components/home";
import NotFound from "./components/not-found";

const Routes = (props: any) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home"/>
      <Route path="/home" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
