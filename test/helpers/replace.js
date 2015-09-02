'use strict';

var assert = require('assert');
var replace = require('../../src/helpers/replace');

describe('helpers/replace', function () {
  it('should create a replace helper method', function () {
    assert.equal(replace(/r/gm, 'r,r', '<r>'), '<r>,<r>');
    assert.equal(replace(/\d/gm, '', '<r>'), '');
  });
});
