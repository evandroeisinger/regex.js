'use strict';

var assert = require('assert');
var regex = require('../../regex');

describe('actions/ipv4.validate', function () {
  it('should return true to a valid ipv4', function () {
    assert.equal(regex.ipv4.validate('127.0.0.1'), true);
    assert.equal(regex.ipv4.validate('127.127.127.127'), true);
    assert.equal(regex.ipv4.validate('999.999.999.999'), true);
    assert.equal(regex.ipv4.validate('999.88.7.6'), true);
    assert.equal(regex.ipv4.validate('0.1.2.3'), true);
  });

  it('should return false to a invalid ipv4', function () {
    assert.equal(regex.ipv4.validate('a.1.b.2'), false);
    assert.equal(regex.ipv4.validate('123 .321 .123.321'), false);
    assert.equal(regex.ipv4.validate('123123123123'), false);
    assert.equal(regex.ipv4.validate('321_123_321_123'), false);
  });
});
