var convert = require('lib/lodash/fp/convert'),
    func = convert('isRegExp', require('lib/lodash/isRegExp'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
