'use strict';

var collection = require('./collection');

function loadCollection () {
  var types = {
    format: {},
    replace: {},
    validate: {},
    search: {},
  };

  for (var regex in collection) {
    var type = collection[regex];

    if (type.indexOf('format') !== -1) {
      types.format[regex];
    };

    if (type.indexOf('replace') !== -1) {
      types.format[regex];
    };

    if (type.indexOf('validate') !== -1) {
      types.format[regex];
    };

    if (type.indexOf('search') !== -1) {
      types.format[regex];
    };
  }

  return types;
}

module.exports = loadCollection();
