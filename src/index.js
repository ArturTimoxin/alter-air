import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { Route, Router, Switch } from "react-router-dom";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { history } from "./store/configureStore";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BreadcrumbsProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    </BreadcrumbsProvider>
  </Provider>,
  document.getElementById("root"),
);
