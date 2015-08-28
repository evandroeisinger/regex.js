'use strict';

var assert = require('assert');
var replaceHelper = require('../../helpers/replace');

describe('helpers/replace', function () {
  it('should set a new regex with global flag', function () {
    var regex = /^test$/;
    regex.replace = replaceHelper;

    assert.equal(regex.replace('test', 'match'), 'match');
    assert.equal(regex._global.global, true);
  });

  it('should replace all matches', function () {
    var regex = /^test$/;
    regex.replace = replaceHelper;

    assert.equal(regex.replace('test1 test2 test3', 'match'), 'match1 match2 match3');
  });

  it('should return the original if there is no replacement', function () {
    var regex = /^test$/;
    regex.replace = replaceHelper;

    assert.equal(regex.replace('match1 match2 match3', 'test'), 'match1 match2 match3');
  });
});