'use strict';

function replace (source, value) {
  if (!this._global) {
    this._global = new RegExp(this.source.slice(1, -1), 'g');
  }

  return source.replace(this._global, value);
}

module.exports = replace;