var convert = require('lib/lodash/fp/convert'),
    func = convert('toPlainObject', require('lib/lodash/toPlainObject'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
