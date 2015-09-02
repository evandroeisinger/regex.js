'use strict';

var assert = require('assert');
var regex = require('../../regex');

describe('actions/email.validate', function () {
  it('should return true to a valid email', function () {
    assert.equal(regex.email.validate('abc@abc'), true);
    assert.equal(regex.email.validate('abc@abc.com'), true);
    assert.equal(regex.email.validate('a.b.c@abc.com'), true);
    assert.equal(regex.email.validate('a-b-c@abc.com'), true);
    assert.equal(regex.email.validate('abc@a.b.c.com'), true);
  });

  it('should return false to a invalid email', function () {
    assert.equal(regex.email.validate('@abc'), false);
    assert.equal(regex.email.validate('abc@'), false);
    assert.equal(regex.email.validate('a b c@abc.com'), false);
    assert.equal(regex.email.validate('a;b;c@abc.com'), false);
  });
});
