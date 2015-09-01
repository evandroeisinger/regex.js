'use strict';

var assert = require("assert");
var regex = require('../../regex');

describe('regex/validIpv4', function () {
  it('should return true to a valid ipv4', function () {
    assert.equal(regex.validateIpv4('127.0.0.1'), true);
    assert.equal(regex.validateIpv4('127.127.127.127'), true);
    assert.equal(regex.validateIpv4('999.999.999.999'), true);
    assert.equal(regex.validateIpv4('999.88.7.6'), true);
    assert.equal(regex.validateIpv4('0.1.2.3'), true);
  });

  it('should return false to a invalid ipv4', function () {
    assert.equal(regex.validateIpv4('a.1.b.2'), false);
    assert.equal(regex.validateIpv4('123 .321 .123.321'), false);
    assert.equal(regex.validateIpv4('123123123123'), false);
    assert.equal(regex.validateIpv4('321_123_321_123'), false);
  });
});
