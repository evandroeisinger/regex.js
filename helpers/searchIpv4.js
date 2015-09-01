'use strict';

var collection = require('../collection');

function searchIpv4 (value) {
  return value.match(collection.ipv4_gm) || [];
}

module.exports = searchIpv4;