const validator = require('validator');
const xssFilters = require('xss-filters');

module.exports = {
  email(str) {
    let clean = str;
    clean = xssFilters.inHTMLData(clean);
    clean = validator.trim(clean);
    clean = validator.escape(clean);
    clean = validator.normalizeEmail(clean);

    return clean;
  },

  name(str) {
    return xssFilters.inHTMLData(str);
  },
};
