'use strict';

var assert = require("assert");
var regex = require('../regex');
var collection = require('../collection');

describe('regex', function () {
  it('should have imported all collection', function () {
    for (var name in collection) {
      assert.equal(typeof regex[name].replace, 'function');
      assert.equal(typeof regex[name].search, 'function');
      assert.equal(typeof regex[name].validate, 'function');
    }
  });
});
