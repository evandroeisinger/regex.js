'use strict';

function search (regex, source) {
  return regex.test(source);
}

module.exports = search;