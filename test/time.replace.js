'use strict';

var assert = require('assert');
var regex = require('../regex');

describe('regexs/time.replace', function () {
  it('should replace all time by <time>', function () {
    assert.equal(regex.time.replace('', '<time>'), '');
    assert.equal(regex.time.replace('06:30, 6:30, 11:30, 6:00am, 6am, 6:00 A.M., 6:00 pm', '<time>'), '<time>, <time>, <time>, <time>, <time>, <time>, <time>');
    assert.equal(regex.time.replace('06:30, 6:30, 11:30, inva.lid.ip, 6am, 6:00 A.M., 6:00 pm', '<time>'), '<time>, <time>, <time>, inva.lid.ip, <time>, <time>, <time>');
  });
});
