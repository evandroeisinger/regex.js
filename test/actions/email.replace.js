'use strict';

var assert = require('assert');
var regex = require('../../regex');

describe('actions/email.replace', function () {
  it('should replace all emails by <email>', function () {
    assert.equal(regex.email.replace('', '<email>'), '');
    assert.equal(regex.email.replace('abc@abc, abc@abc', '<email>'), '<email>, <email>');
    assert.equal(regex.email.replace('a.b.c@abc.com, a.b.c@abc.com', '<email>'), '<email>, <email>');
  });
});
