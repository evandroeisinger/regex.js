'use strict';

var collection = require('../collection');
var validatehHelpers = {};

function search (regexName) {
  if (validatehHelpers[regexName]) return validatehHelpers[regexName];

  if (!collection[regexName]) {
    throw Error('Regex ' + regexName + ' not found at collection.js');
  }

  validatehHelpers[regexName] = function (value) {
    return collection[regexName].test(value);
  };

  return validatehHelpers[regexName];
}

module.exports = search;