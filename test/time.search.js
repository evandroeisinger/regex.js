'use strict';

var assert = require('assert');
var regex = require('../regex');

describe('regexs/time.search', function () {
  it('should return all valid time', function () {
    assert.equal(regex.time.search('05:30, 5:30, 23:30, 5:00am').length, 4);
    assert.equal(regex.time.search('inva.lid.ip #.4.@.1 -.-.|.|').length, 0);
    assert.equal(regex.time.search('10:30, 5:30, 23:30, 5:00am')[0], '10:30');
    assert.equal(regex.time.search('10:30, 5:30, 23:30, 5:00am')[3], '5:00am');
  });
});
