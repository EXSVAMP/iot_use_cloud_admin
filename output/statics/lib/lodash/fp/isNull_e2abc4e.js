var convert = require('lib/lodash/fp/convert'),
    func = convert('isNull', require('lib/lodash/isNull'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
