'use strict';

var assert = require("assert");
var regex = require('../../regex');

describe('helpers/replaceEmails', function () {
  it('should replace all emails by <email>', function () {
    assert.equal(regex.replaceEmails('', '<email>'), '');
    assert.equal(regex.replaceEmails('abc@abc, abc@abc', '<email>'), '<email>, <email>');
    assert.equal(regex.replaceEmails('abc@abc.com, abc@abc.com', '<email>'), '<email>, <email>');
    assert.equal(regex.replaceEmails('a.b.c@abc.com, a.b.c@abc.com', '<email>'), '<email>, <email>');
    assert.equal(regex.replaceEmails('a-b-c@abc.com, a-b-c@abc.com', '<email>'), '<email>, <email>');
  });
});
