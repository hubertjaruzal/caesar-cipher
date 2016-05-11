var express = require('express');
var path = require('path');
var fallback = require('express-history-api-fallback');

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


var React = require('react'),
var ReactApp = React.createFactory(require('./views/js/application'));

module.exports = function(app) {

  app.get('/', function(req, res){

    // React.renderToString takes your component and generates the markup
    var reactHtml = React.renderToString(ReactApp({}));

    // Output html rendered by react into .ejs file. Can be any template
    res.render('index.ejs', {reactOutput: reactHtml});
  });

};
