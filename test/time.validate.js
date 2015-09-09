'use strict';

var assert = require('assert');
var regex = require('../regex');

describe('regexs/time.validate', function () {
  it('should return true to a valid time', function () {
    assert.equal(regex.time.validate('14:30'), true);
    assert.equal(regex.time.validate('6:40 pm'), true);
    assert.equal(regex.time.validate('6am'), true);
    assert.equal(regex.time.validate('00:00'), true);
    assert.equal(regex.time.validate('2pm'), true);
  });

  it('should return false to a invalid time', function () {
    assert.equal(regex.time.validate('1a2:30'), false);
    assert.equal(regex.time.validate('39 :30pm'), false);
    assert.equal(regex.time.validate('2  em'), false);
    assert.equal(regex.time.validate('939:333'), false);
  });
});
