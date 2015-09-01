'use strict';

var collection = require('../collection');

function replaceIpv4 (source, value) {
  return source.replace(collection.ipv4_gm, value);
}

module.exports = replaceIpv4;