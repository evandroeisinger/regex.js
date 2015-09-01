'use strict';

var assert = require('assert');
var regex = require('../../regex');

describe('methods/validEmail', function () {
  it('should return true to a valid email', function () {
    assert.equal(regex.validateEmail('abc@abc'), true);
    assert.equal(regex.validateEmail('abc@abc.com'), true);
    assert.equal(regex.validateEmail('a.b.c@abc.com'), true);
    assert.equal(regex.validateEmail('a-b-c@abc.com'), true);
    assert.equal(regex.validateEmail('abc@a.b.c.com'), true);
  });

  it('should return false to a invalid email', function () {
    assert.equal(regex.validateEmail('@abc'), false);
    assert.equal(regex.validateEmail('abc@'), false);
    assert.equal(regex.validateEmail('a b c@abc.com'), false);
    assert.equal(regex.validateEmail('a;b;c@abc.com'), false);
  });
});
