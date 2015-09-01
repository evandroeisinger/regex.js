'use strict';

var collection = require('../collection');
var searchHelpers = {};

function search (regexName) {
  if (searchHelpers[regexName]) return searchHelpers[regexName];

  if (!collection[regexName]) {
    throw Error('Regex ' + regexName + ' not found at collection.js');
  }

  searchHelpers[regexName] = function (value) {
    return value.match(collection[regexName]) || [];
  };

  return searchHelpers[regexName];
}

module.exports = search;