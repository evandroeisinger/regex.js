'use strict';

var collection = require('./collection');

function createAction (helperName, regexName) {
  var helper = require('./helpers/' + helperName);
  var regex = collection[regexName];

  return function () {
    return helper.apply({}, [regex].concat([].slice.call(arguments)));
  };
}

module.exports = {
  create: createAction,
};