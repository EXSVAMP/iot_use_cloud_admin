var convert = require('lib/lodash/fp/convert'),
    func = convert('flattenDeep', require('lib/lodash/flattenDeep'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
