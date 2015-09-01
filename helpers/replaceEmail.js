'use strict';

var collection = require('../collection');

function replaceEmail (source, value) {
  return source.replace(collection.email_gm, value);
}

module.exports = replaceEmail;