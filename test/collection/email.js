'use strict';

var assert = require("assert");
var emailRegex = require('../../regex').email;

describe('regex/email', function () {
  it('should return true to a valid email', function () {
    assert.equal(emailRegex.validate('abc@abc'), true);
    assert.equal(emailRegex.validate('abc@abc.com'), true);
    assert.equal(emailRegex.validate('a.b.c@abc.com'), true);
    assert.equal(emailRegex.validate('a-b-c@abc.com'), true);
    assert.equal(emailRegex.validate('abc@a.b.c.com'), true);
  });

  it('should return false to a invalid email', function () {
    assert.equal(emailRegex.validate('@abc'), false);
    assert.equal(emailRegex.validate('abc@'), false);
    assert.equal(emailRegex.validate('a b c@abc.com'), false);
    assert.equal(emailRegex.validate('a;b;c@abc.com'), false);
  });

  it('should replace all emails by <email>', function () {
    assert.equal(emailRegex.replace('', '<email>'), '');
    assert.equal(emailRegex.replace('abc@abc, abc@abc', '<email>'), '<email>, <email>');
    assert.equal(emailRegex.replace('abc@abc.com, abc@abc.com', '<email>'), '<email>, <email>');
    assert.equal(emailRegex.replace('a.b.c@abc.com, a.b.c@abc.com', '<email>'), '<email>, <email>');
    assert.equal(emailRegex.replace('a-b-c@abc.com, a-b-c@abc.com', '<email>'), '<email>, <email>');
  });

  it('should return all searched emails', function () {
    assert.equal(emailRegex.search('abc@abc, def@def')[0], 'abc@abc');
    assert.equal(emailRegex.search('abc@abc, def@def')[1], 'def@def');

    assert.equal(emailRegex.search('abc@abc.com, def@def.com')[0], 'abc@abc.com');
    assert.equal(emailRegex.search('abc@abc.com, def@def.com')[1], 'def@def.com');

    assert.equal(emailRegex.search('a.b.c@a.b.c, d.e.f@d.e.f')[0], 'a.b.c@a.b.c');
    assert.equal(emailRegex.search('a.b.c@a.b.c, d.e.f@d.e.f')[1], 'd.e.f@d.e.f');

    assert.equal(emailRegex.search('a-b-c@abc.com, d-e-f@def.com')[0], 'a-b-c@abc.com');
    assert.equal(emailRegex.search('a-b-c@abc.com, d-e-f@def.com')[1], 'd-e-f@def.com');
  });
});
