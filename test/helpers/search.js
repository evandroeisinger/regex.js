'use strict';

var assert = require('assert');
var searchHelper = require('../../helpers/search');

describe('helpers/search', function () {
  it('should return all matches', function () {
    assert.equal(searchHelper(/test(1|2|3)/gm, 'test1 test2 test3')[0], 'test1');
    assert.equal(searchHelper(/test(1|2|3)/gm, 'test1 test2 test3')[1], 'test2');
    assert.equal(searchHelper(/test(1|2|3)/gm, 'test1 test2 test3')[2], 'test3');
  });

  it('should return empty if there is no match', function () {
    assert.equal(searchHelper(/test(1|2|3)/gm, 'no match').length, 0);
  });
});