'use strict';

function validate (regex, value) {
  return regex.test(value);
}

module.exports = validate;
