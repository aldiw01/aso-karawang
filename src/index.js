import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { Provider } from "react-redux";
import store from "./store";
import { login } from "./store/actions";
import Cookies from "./utils/Cookies";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import BlogPage from "views/BlogPage/BlogPage.jsx";
import FTTHPage from "views/FTTHPage/BlogPage.jsx";
import ProvisioningPage from "views/ProvisioningPage/BlogPage.jsx";
import AssurancePage from "views/AssurancePage/BlogPage.jsx";
import WOCPage from "views/WOCPage/BlogPage.jsx";
import AboutPage from "views/AboutPage/BlogPage.jsx";

var hist = createBrowserHistory();

const token = Cookies.read('token');

if (token) {
  const user = jwtDecode(token);

  store.dispatch(login(user));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/component" component={Components} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/blog-page" component={BlogPage} />
        <Route path="/ftth" component={FTTHPage} />
        <Route path="/provision" component={ProvisioningPage} />
        <Route path="/assurance" component={AssurancePage} />
        <Route path="/woc" component={WOCPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
