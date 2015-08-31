'use strict';

var assert = require('assert');
var replaceHelper = require('../../helpers/replace');

describe('helpers/replace', function () {
  it('should replace all matches', function () {
    assert.equal(replaceHelper(/test/gm, 'test1 test2 test3', 'match'), 'match1 match2 match3');
  });

  it('should return the original if there is no replacement', function () {
    assert.equal(replaceHelper(/test/gm, 'match1 match2 match3', 'test'), 'match1 match2 match3');
  });
});