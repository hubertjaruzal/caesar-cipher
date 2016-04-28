var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'views');

// We point to our static assets
app.use(express.static(publicPath));
app.use(history());

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
