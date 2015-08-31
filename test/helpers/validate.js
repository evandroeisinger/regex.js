'use strict';

var assert = require('assert');
var validateHelper = require('../../helpers/validate');

describe('helpers/validate', function () {
  it('should a validate a regex', function () {
    assert.equal(validateHelper(/^test$/, 'test'), true);
    assert.equal(validateHelper(/^test$/, 'tset'), false);
  });
});