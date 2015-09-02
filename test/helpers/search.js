'use strict';

var assert = require('assert');
var search = require('../../src/helpers/search');

describe('helpers/search', function () {
  it('should create a search helper method', function () {
    assert.equal(search(/\d/gm, 'a, b').length, 0);
    assert.equal(search(/\d/gm, '1, 2').length, 2);
    assert.equal(search(/\d/gm, '1, 2')[0], '1');
    assert.equal(search(/\d/gm, '1, 2')[1], '2');
  });
});
