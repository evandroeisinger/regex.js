'use strict';

module.exports = {
  /** email regex */
  'email': /^([\w0-9\.\-\_])+@[\w]+(\.[\w]+)*$/,
  'email_gm': /([\w0-9\.\-\_])+@[\w]+(\.[\w]+)*/gm,

  /** ipv4 regex */
  'ipv4': /^([0-9]{1,3}\.){3}[0-9]{1,3}$/,
  'ipv4_gm': /([0-9]{1,3}\.){3}[0-9]{1,3}/gm,

  /** time regex */
  'time_i': /^(\d{1,2}(:\d{2})?\s?(?:[ap]\.?m\.?)?|\d[ap]\.?m\.?)$/i,
  'time_gmi': /(\d{1,2}:\d{2}\s?(?:[ap]\.?m\.?)?|\d[ap]\.?m\.?)/gmi,
};