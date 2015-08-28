'use strict';

// imports
var collection = require('./collection');
var validateHelper = require('./helpers/validate');
var replaceHelper = require('./helpers/replace');
var searchHelper = require('./helpers/search');

// apply regular expressions helpers
for (var name in collection) {
  collection[name].validate = validateHelper;
  collection[name].replace = replaceHelper;
  collection[name].search = searchHelper;
}

module.exports = collection;
