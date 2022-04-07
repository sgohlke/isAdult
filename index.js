// Release 0.2.0

function isAnAdult(age, country = 'ger') {
  switch (country) {
    case 'ger':
      return age >= 18;
    case 'arab':
      return age >= 16;
    default:
      return age >= 18;
  }
}

/**
 * @deprecated Use isAnAdult() instead
 * */
function isAdult(age, country = 'ger') {
  return isAnAdult(age, country);
}

const result = isAdult(17);
// eslint-disable-next-line no-console
console.log('Person is an adult?', result);

const express = require('express');
const crypto = require('crypto');

const app = express();

crypto.generateKey('hmac', { length: 64 }, (err, key) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(key.export().toString('hex')); // 46e..........620
});

app.get('/', (req, res) => {
  res.send(`Person is an adult with 17? ${String(result)}`);
});

app.listen(3000);
