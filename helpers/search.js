'use strict';

function search (value) {
  if (!this._global) {
    this._global = new RegExp(this.source.slice(1, -1), 'g');
  }

  return value.match(this._global) || [];
}

module.exports = search;