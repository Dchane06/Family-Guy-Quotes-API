const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res, next) => {
    res.send('Welcome to the family guy quotes API. Use /api/quotes/random to get a random quote.')
})

app.get('/api/quotes/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    res.send({quote: quote});
  });

  app.get('/api/quotes', (req, res, next) => {
    if (!req.query.hasOwnProperty('person')) {
      res.send({quotes: quotes});
    } else {
      const filterQuote = quotes.filter(element => element.person === req.query.person);
      res.send({quotes: filterQuote});
    }
  });