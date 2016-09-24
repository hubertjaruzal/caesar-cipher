import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Layout from "./components/layout.js";
import Encryption from "./components/encryption/encryption.js";
import Decryption from "./components/decryption/decryption.js";
import About from "./components/about/about.js";

require('../style/app.scss');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ About }></IndexRoute>
      <Route path="encryption" component={ Encryption }>
      </Route>
      <Route path="decryption" component={ Decryption }>
      </Route>
      <Route path="about" component={ About }>
      </Route>
    </Route>
  </Router>
, app);
