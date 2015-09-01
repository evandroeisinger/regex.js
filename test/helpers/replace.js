'use strict';

var assert = require('assert');
var defaultReplace = require('../../helpers/replace');

describe('helpers/replace', function () {
  it('should create a replace helper method', function () {
    var replaceEmail = defaultReplace('email_gm');

    assert.equal(replaceEmail('replace@replace', '<replace>'), '<replace>');
  });
});
