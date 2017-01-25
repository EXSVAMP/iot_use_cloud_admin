var convert = require('lib/lodash/fp/convert'),
    func = convert('isUndefined', require('lib/lodash/isUndefined'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
