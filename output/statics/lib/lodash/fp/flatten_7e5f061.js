var convert = require('lib/lodash/fp/convert'),
    func = convert('flatten', require('lib/lodash/flatten'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
