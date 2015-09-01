'use strict';

var assert = require("assert");
var regex = require('../../regex');

describe('helpers/replaceEmail', function () {
  it('should replace all emails by <email>', function () {
    assert.equal(regex.replaceEmail('', '<email>'), '');
    assert.equal(regex.replaceEmail('abc@abc, abc@abc', '<email>'), '<email>, <email>');
    assert.equal(regex.replaceEmail('abc@abc.com, abc@abc.com', '<email>'), '<email>, <email>');
    assert.equal(regex.replaceEmail('a.b.c@abc.com, a.b.c@abc.com', '<email>'), '<email>, <email>');
    assert.equal(regex.replaceEmail('a-b-c@abc.com, a-b-c@abc.com', '<email>'), '<email>, <email>');
  });
});
