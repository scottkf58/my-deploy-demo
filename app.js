const express = require('express');
const app = express();
const config = require(`./config/${process.env.NODE_ENV}.js`);

if (!config.PORT) {
  process.exit(1);
}

app.use(express.static(__dirname + '/public'));

let currentCount = 0;

app.get('/api/counter', (req, res) => {
  res.json({
    counter: currentCount
  });
});

app.get('/api/counter/decrement', (req, res) => {
  --currentCount;
  res.status(200);
});

app.get('/api/counter/increment', (req, res) => {
  ++currentCount;
  res.status(200);
});

// console.log(config.PORT);
const server = app.listen(config.PORT);

// NODE_ENV=production node app.js
// NODE_ENV=development node app.js
