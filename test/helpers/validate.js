'use strict';

var assert = require('assert');
var defaultValidate = require('../../helpers/validate');

describe('helpers/validate', function () {
  it('should create a validate helper method', function () {
    var validateEmail = defaultValidate('email_gm');

    assert.equal(validateEmail('abc@abc'), true);
  });
});
