require('../style/app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./components/layout.js";

import Cipher from "./components/cipher/cipher.js";
import About from "./components/about/about.js";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ About }></IndexRoute>
      <Route path="cipher" component={ Cipher }>
      </Route>
      <Route path="about" component={ About }>
      </Route>
    </Route>
  </Router>
, app);
