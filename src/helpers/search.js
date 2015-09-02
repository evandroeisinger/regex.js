'use strict';

function search (regex, source) {
  return source.match(regex) || [];
}

module.exports = search;