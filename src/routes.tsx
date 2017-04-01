import * as React from "react";
import { Router, Route, IndexRedirect } from "react-router";

import App from "./app";
import Home from "./app/components/home";
import NotFound from "./app/components/not-found";

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
