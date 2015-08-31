'use strict';

var assert = require("assert");
var regex = require('../regex');

describe('regex', function () {
  it('should have exported all methods', function () {
    assert.equal(typeof regex.replace, 'object');
    assert.equal(typeof regex.search, 'object');
    assert.equal(typeof regex.validate, 'object');
  });
});
