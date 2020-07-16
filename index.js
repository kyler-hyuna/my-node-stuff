require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const config = {
  square: 4,
  rectangle: 4,
};

const name = `My chickens are blue and green, and my favourite one is ${process.env.NAME}`;

const names = [
  'shem',
  'askuydfhaksdfaksdfyasdfkyasdfasdfbakhsdbfhkasbfhkabdfhkabk',
];

switch (config.square) {
  case 4:
    console.log('helllo');
    break;
  default:
    console.log('mums');
}

app.get('/monitor', (req, res) => {
  res.send(`I'm healthy`);
});

app.get('/name', (_, res) => {
  res.send(`My name is ${process.env.NAME}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
