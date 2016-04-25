const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
  if (process.env.BASIC_AUTH_USERNAME || process.env.BASIC_AUTH_PASSWORD) {
    const basicAuth = require('basic-auth');
    const auth = (req, res, next) => {
      function unauthorized() {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
      }

      const user = basicAuth(req);
      if (!user || !user.name || !user.pass) {
        return unauthorized(res);
      }

      if (user.name === process.env.BASIC_AUTH_USERNAME && user.pass === process.env.BASIC_AUTH_PASSWORD) {
        return next();
      } else {
        return unauthorized();
      }
    };

    app.use(auth);
  }
}

const root = `${__dirname}/dist`;
app.use(express.static(root));
app.use(fallback('index.html', { root }));
app.get('/', (request, response) => response.render('dist/index.html'));

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), () => console.log('Sellektor Admin (production) is running on port', app.get('port')));
