'use strict';

var helpers = require('./src/helpers');

module.exports = {
  /** email helpers */
  email : {
    search: helpers.register('search', 'email_gm'),
    replace: helpers.register('replace', 'email_gm'),
    validate: helpers.register('validate', 'email'),
  },

  /** ipv4 helpers */
  ipv4: {
    search: helpers.register('search', 'ipv4_gm'),
    replace: helpers.register('replace', 'ipv4_gm'),
    validate: helpers.register('validate', 'ipv4'),
  },
};
