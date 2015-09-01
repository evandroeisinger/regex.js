'use strict';

var collection = require('../collection');

function replaceEmails (source, value) {
  return source.replace(collection.emails, value);
}

module.exports = replaceEmails;