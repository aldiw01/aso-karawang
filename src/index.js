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
import FTTHPage from "views/FTTHPage/FTTHPage.jsx";
import PTPage from "views/FTTHPage/PTPage.jsx";
import ProvWOPage from "views/ProvisioningPage/ProvWOPage.jsx";
import ProvToolsPage from "views/ProvisioningPage/ProvToolsPage.jsx";
import AssuranceWOPage from "views/AssurancePage/AssuranceWOPage.jsx";
import AssuranceToolsPage from "views/AssurancePage/AssuranceToolsPage.jsx";
import WOCPage from "views/WOCPage/WOCPage.jsx";
import HDProvisionPage from "views/WOCPage/HDProvisionPage.jsx";
import HDAssurancePage from "views/WOCPage/HDAssurancePage.jsx";
import HDLogicPage from "views/WOCPage/HDLogicPage.jsx";
import HDFalloutPage from "views/WOCPage/HDFalloutPage.jsx";
import HDMaintenancePage from "views/WOCPage/HDMaintenancePage.jsx";
import HDTDMPage from "views/WOCPage/HDTDMPage.jsx";
import WitelPage from "views/AboutPage/WitelPage.jsx";
import ASOPage from "views/AboutPage/ASOPage.jsx";
import QuizPage from "views/QuizPage/QuizPage.jsx";

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
        <Route path="/login" component={LoginPage} />
        <Route path="/blog-page" component={BlogPage} />

        <Route path="/ftth" exact component={FTTHPage} />
        <Route path="/ftth/pt" component={PTPage} />

        <Route path="/provisioning" exact component={ProvWOPage} />
        <Route path="/provisioning/wo" component={ProvWOPage} />
        <Route path="/provisioning/tools" component={ProvToolsPage} />

        <Route path="/assurance" exact component={AssuranceWOPage} />
        <Route path="/assurance/wo" component={AssuranceWOPage} />
        <Route path="/assurance/tools" component={AssuranceToolsPage} />

        <Route path="/woc" exact component={WOCPage} />
        <Route path="/woc/provisioning" component={HDProvisionPage} />
        <Route path="/woc/assurance" component={HDAssurancePage} />
        <Route path="/woc/logic" component={HDLogicPage} />
        <Route path="/woc/fallout" component={HDFalloutPage} />
        <Route path="/woc/maintenance" component={HDMaintenancePage} />
        <Route path="/woc/tdm" component={HDTDMPage} />

        <Route path="/about" exact component={WitelPage} />
        <Route path="/about/witel" component={WitelPage} />
        <Route path="/about/aso" component={ASOPage} />
        <Route path="/about/developer" component={ProfilePage} />

        <Route path="/quiz" component={QuizPage} />

        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
