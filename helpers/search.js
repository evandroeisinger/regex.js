'use strict';

function search (regex, value) {
  return value.match(regex) || [];
}

module.exports = search;