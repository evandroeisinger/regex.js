'use strict';

var collection = require('../collection');

function validateEmail (value) {
  return collection.email.test(value);
}

module.exports = validateEmail;
