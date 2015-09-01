'use strict';

var assert = require('assert');
var defaultSearch = require('../../helpers/search');

describe('helpers/search', function () {
  it('should create a search helper method', function () {
    var searchEmail = defaultSearch('email_gm');

    assert.equal(searchEmail('search@email, email@search')[0], 'search@email');
    assert.equal(searchEmail('search@email, email@search')[1], 'email@search');
  });
});
