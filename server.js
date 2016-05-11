var express = require('express');
var path = require('path');
var fallback = require('express-history-api-fallback');

import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './views/js/application.js'

serve((req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.status(200).send(renderToString(<RouterContext {...renderProps} />))
    } else {
      res.status(404).send('Not found')
    }
  })
})
});

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'views');

// We point to our static assets
app.use(express.static(publicPath));
app.use(fallback('index.html', { root: publicPath }))

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
