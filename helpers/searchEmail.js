'use strict';

var collection = require('../collection');

function searchEmail (value) {
  return value.match(collection.email_gm) || [];
}

module.exports = searchEmail;