const express = require('express');
const connectHistory = require('connect-history-api-fallback');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const app = express();

app.use(connectHistory({ index: '/index.html' }));

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: true,
});

app.use(devMiddleware);

const hotMiddleware = require('webpack-hot-middleware');
app.use(hotMiddleware(compiler, {
  reload: true,
}));

app.use(express.static('views/'));

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), () => {
  console.log('Sellektor Admin is running on port', app.get('port'));
});
