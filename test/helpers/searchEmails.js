'use strict';

var assert = require("assert");
var regex = require('../../regex');

describe('regex/searchEmail', function () {
  it('should return all searched emails', function () {
    assert.equal(regex.searchEmail('abc@abc, def@def')[0], 'abc@abc');
    assert.equal(regex.searchEmail('abc@abc, def@def')[1], 'def@def');

    assert.equal(regex.searchEmail('abc@abc.com, def@def.com')[0], 'abc@abc.com');
    assert.equal(regex.searchEmail('abc@abc.com, def@def.com')[1], 'def@def.com');

    assert.equal(regex.searchEmail('a.b.c@a.b.c, d.e.f@d.e.f')[0], 'a.b.c@a.b.c');
    assert.equal(regex.searchEmail('a.b.c@a.b.c, d.e.f@d.e.f')[1], 'd.e.f@d.e.f');

    assert.equal(regex.searchEmail('a-b-c@abc.com, d-e-f@def.com')[0], 'a-b-c@abc.com');
    assert.equal(regex.searchEmail('a-b-c@abc.com, d-e-f@def.com')[1], 'd-e-f@def.com');
  });
});
