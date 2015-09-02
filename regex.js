'use strict';

var action = require('./src/action');

module.exports = {
  /** email actions */
  email : {
    search: action.create('search', 'email_gm'),
    replace: action.create('replace', 'email_gm'),
    validate: action.create('validate', 'email'),
  },

  /** ipv4 actions */
  ipv4: {
    search: action.create('search', 'ipv4_gm'),
    replace: action.create('replace', 'ipv4_gm'),
    validate: action.create('validate', 'ipv4'),
  },
};
