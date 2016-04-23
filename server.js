const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();


const root = `${__dirname}/dist`;
app.use(express.static(root));
app.use(fallback('index.html', { root }));
app.get('/', (request, response) => response.render('dist/index.html'));

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), () => console.log('Sellektor Admin (production) is running on port', app.get('port')));
