'use strict';

// default helpers
var defaultReplace = require('./helpers/replace');
var defaultSearch = require('./helpers/search');
var defaultValidate = require('./helpers/validate');

module.exports = {
  /**
   * email methods
   */

  searchEmail: defaultSearch('email_gm'),
  replaceEmail: defaultReplace('email_gm'),
  validateEmail: defaultValidate('email'),

  /**
   * ipv4 methods
   */

  searchIpv4: defaultSearch('ipv4_gm'),
  replaceIpv4: defaultReplace('ipv4_gm'),
  validateIpv4: defaultValidate('ipv4'),
};
