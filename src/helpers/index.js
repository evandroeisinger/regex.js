'use strict';

var collection = require('../collection');

function registerHelper (helperName, regexName) {
  var helper = require('./' + helperName);
  var regex = collection[regexName];

  return function () {
    return helper.apply({}, [regex].concat([].slice.call(arguments)));
  };
}

module.exports = {
  register: registerHelper,
};