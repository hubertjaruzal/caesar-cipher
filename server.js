var express = require('express');
var path = require('path');
var fallback = require('express-history-api-fallback');
var React = require('react');
var Router = require('react-router');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'views');
// We point to our static assets
app.use(express.static(publicPath));
app.get('/favicon.ico', (req, res) => res.send(''));
app.use((req, res) => {
  Router.run(routes, req.path, (Handler) => {
    res.send('<!DOCTYPE html>' + React.renderToString(<Handler path={req.path} />));
  });
});


// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
