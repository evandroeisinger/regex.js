'use strict';

// export helpers
module.exports = {
  /**
   * email helpers
   */

  searchEmail: require('./helpers/searchEmail'),
  replaceEmail: require('./helpers/replaceEmail'),
  validateEmail: require('./helpers/validateEmail'),

  /**
   * ipv4 helpers
   */

  searchIpv4: require('./helpers/searchIpv4'),
  replaceIpv4: require('./helpers/replaceIpv4'),
  validateIpv4: require('./helpers/validateIpv4'),
};
