'use strict';

var collection = require('../collection');

function validateIpv4 (value) {
  return collection.ipv4.test(value);
}

module.exports = validateIpv4;
