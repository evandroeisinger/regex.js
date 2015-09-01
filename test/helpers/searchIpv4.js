'use strict';

var assert = require("assert");
var regex = require('../../regex');

describe('regex/searchIpv4', function () {
  it('should return all valid ipv4', function () {
    assert.equal(regex.searchIpv4('127.0.0.1 a.b.c.d 127.0.0.2').length, 2);
    assert.equal(regex.searchIpv4('inva.lid.ip #.4.@.1 -.-.|.|').length, 0);
    assert.equal(regex.searchIpv4('127.0.0.1 a.b.c.d 127.0.0.2')[0], '127.0.0.1');
    assert.equal(regex.searchIpv4('127.0.0.1 a.b.c.d 127.0.0.2')[1], '127.0.0.2');
  });
});
