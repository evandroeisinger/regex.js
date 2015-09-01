'use strict';

var collection = require('../collection');

function searchEmails (value) {
  return value.match(collection.emails) || [];
}

module.exports = searchEmails;