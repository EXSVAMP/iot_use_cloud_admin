var convert = require('lib/lodash/fp/convert'),
    func = convert('property', require('lib/lodash/property'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
