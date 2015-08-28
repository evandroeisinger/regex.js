'use strict';

var assert = require('assert');
var searchHelper = require('../../helpers/search');

describe('helpers/search', function () {
  it('should set a new regex with global flag', function () {
    var regex = /^test$/;
    regex.search = searchHelper;

    assert.equal(regex.search('test')[0], 'test');
    assert.equal(regex._global.global, true);
  });

  it('should return all matches', function () {
    var regex = /^test(1|2|3)$/;
    regex.search = searchHelper;

    assert.equal(regex.search('test1 test2 test3')[0], 'test1');
    assert.equal(regex.search('test1 test2 test3')[1], 'test2');
    assert.equal(regex.search('test1 test2 test3')[2], 'test3');
  });

  it('should return empty if there is no match', function () {
    var regex = /^test$/;
    regex.search = searchHelper;

    assert.equal(regex.search('no match').length, 0);
  });
});