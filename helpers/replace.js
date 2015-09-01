'use strict';

var collection = require('../collection');
var replaceHelpers = {};

function replace (regexName) {
  if (replaceHelpers[regexName]) return replaceHelpers[regexName];

  if (!collection[regexName]) {
    throw Error('Regex ' + regexName + ' not found at collection.js');
  }

  replaceHelpers[regexName] = function (source, value) {
    return source.replace(collection[regexName], value);
  };

  return replaceHelpers[regexName];
}

module.exports = replace;