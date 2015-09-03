'use strict';

var assert = require('assert');
var regex = require('../regex');

describe('regexs/ipv4.search', function () {
  it('should return all valid ipv4', function () {
    assert.equal(regex.ipv4.search('127.0.0.1 a.b.c.d 127.0.0.2').length, 2);
    assert.equal(regex.ipv4.search('inva.lid.ip #.4.@.1 -.-.|.|').length, 0);
    assert.equal(regex.ipv4.search('127.0.0.1 a.b.c.d 127.0.0.2')[0], '127.0.0.1');
    assert.equal(regex.ipv4.search('127.0.0.1 a.b.c.d 127.0.0.2')[1], '127.0.0.2');
  });
});
