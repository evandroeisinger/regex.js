'use strict';

var assert = require('assert');
var regex = require('../regex');

describe('regexs/ipv4.replace', function () {
  it('should replace all ipsv4 by <ipv4>', function () {
    assert.equal(regex.ipv4.replace('', '<ipv4>'), '');
    assert.equal(regex.ipv4.replace('127.0.0.1, 127.0.0.2', '<ipv4>'), '<ipv4>, <ipv4>');
    assert.equal(regex.ipv4.replace('127.0.0.1, inva.lid.ip', '<ipv4>'), '<ipv4>, inva.lid.ip');
  });
});
