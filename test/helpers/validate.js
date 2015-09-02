'use strict';

var assert = require('assert');
var validate = require('../../src/helpers/validate');

describe('helpers/validate', function () {
  it('should create a validate helper method', function () {
    assert.equal(validate(/\d+/, '123'), true);
    assert.equal(validate(/\d+/, 'abc'), false);
  });
});
