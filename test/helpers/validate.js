'use strict';

var assert = require('assert');
var validateHelper = require('../../helpers/validate');

describe('helpers/validate', function () {
  it('should a validate a regex', function () {
    var regex = /^test$/;
    regex.validate = validateHelper;

    assert.equal(regex.validate('test'), true);
    assert.equal(regex.validate('tset'), false);
  });
});