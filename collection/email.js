'use strict';

var helpers = require('../helpers');

var regex = /^([\w0-9\.\-\_])+@[\w]+(\.[\w]+)*$/;
var gmRegex = /([\w0-9\.\-\_])+@[\w]+(\.[\w]+)*/gm;

function replaceMethod (source, value) {
  return helpers.replace(gmRegex, source, value);
}

function searchMethod (value) {
  return helpers.search(gmRegex, value);
}

function validateMethod (value) {
  return helpers.validate(regex, value);
}

module.exports = {
  replace: replaceMethod,
  search: searchMethod,
  validate: validateMethod,
};
