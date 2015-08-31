'use strict';

// imports
var collection = require('./collection');

// methods
var methods = {
  validate: {},
  replace: {},
  search: {},
};

// apply methods
for (var name in collection) {
  if (collection[name].validate) {
    methods.validate[name] = collection[name].validate;
  }

  if (collection[name].replace) {
    methods.replace[name] = collection[name].replace;
  }

  if (collection[name].search) {
    methods.search[name] = collection[name].search;
  }
}

module.exports = methods;
