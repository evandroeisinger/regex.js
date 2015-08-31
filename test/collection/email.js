'use strict';

var assert = require("assert");
var regex = require('../../regex');

describe('regex/email', function () {
  it('should return true to a valid email', function () {
    assert.equal(regex.validate.email('abc@abc'), true);
    assert.equal(regex.validate.email('abc@abc.com'), true);
    assert.equal(regex.validate.email('a.b.c@abc.com'), true);
    assert.equal(regex.validate.email('a-b-c@abc.com'), true);
    assert.equal(regex.validate.email('abc@a.b.c.com'), true);
  });

  it('should return false to a invalid email', function () {
    assert.equal(regex.validate.email('@abc'), false);
    assert.equal(regex.validate.email('abc@'), false);
    assert.equal(regex.validate.email('a b c@abc.com'), false);
    assert.equal(regex.validate.email('a;b;c@abc.com'), false);
  });

  it('should replace all emails by <email>', function () {
    assert.equal(regex.replace.email('', '<email>'), '');
    assert.equal(regex.replace.email('abc@abc, abc@abc', '<email>'), '<email>, <email>');
    assert.equal(regex.replace.email('abc@abc.com, abc@abc.com', '<email>'), '<email>, <email>');
    assert.equal(regex.replace.email('a.b.c@abc.com, a.b.c@abc.com', '<email>'), '<email>, <email>');
    assert.equal(regex.replace.email('a-b-c@abc.com, a-b-c@abc.com', '<email>'), '<email>, <email>');
  });

  it('should return all searched emails', function () {
    assert.equal(regex.search.email('abc@abc, def@def')[0], 'abc@abc');
    assert.equal(regex.search.email('abc@abc, def@def')[1], 'def@def');

    assert.equal(regex.search.email('abc@abc.com, def@def.com')[0], 'abc@abc.com');
    assert.equal(regex.search.email('abc@abc.com, def@def.com')[1], 'def@def.com');

    assert.equal(regex.search.email('a.b.c@a.b.c, d.e.f@d.e.f')[0], 'a.b.c@a.b.c');
    assert.equal(regex.search.email('a.b.c@a.b.c, d.e.f@d.e.f')[1], 'd.e.f@d.e.f');

    assert.equal(regex.search.email('a-b-c@abc.com, d-e-f@def.com')[0], 'a-b-c@abc.com');
    assert.equal(regex.search.email('a-b-c@abc.com, d-e-f@def.com')[1], 'd-e-f@def.com');
  });
});
