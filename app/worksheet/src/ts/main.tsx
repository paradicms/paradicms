import {Application} from "~/Application";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Hammer from "hammerjs";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {QueryParamProvider} from "use-query-params";

delete Hammer.defaults.cssProps.userSelect;

ReactDOM.render(
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <div></div>
    </QueryParamProvider>
  </Router>,
  document.getElementById("root")
);
