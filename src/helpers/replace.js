'use strict';

function replace (regex, source, value) {
  return source.replace(regex, value);
}

module.exports = replace;