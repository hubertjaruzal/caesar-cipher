var express = require('express');
var path = require('path');
var fallback = require('express-history-api-fallback');
import { renderToString } from 'react-dom/server'

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'views');

// We point to our static assets
app.use(express.static(publicPath));
app.use(fallback('index.html', { root: publicPath }))

const routes = require('../jsx/routes');
const React = require('react');
const {RoutingContext, match} = require('react-router');
const hist = require('history');

app.use((req, res, next) => {
  const location = hist.createLocation(req.path);
  match({
    routes: routes,
    location: location,
  }, (err, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (err) {
      console.log(err);
      next(err);
      // res.send(500, error.message);
    } else if (renderProps === null) {
      res.status(404)
        .send('Not found');
    } else {
      res.send('<!DOCTYPE html>' + React.renderToString(<RoutingContext {...renderProps}/>));
    }
  });
});

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
