var convert = require('lib/lodash/fp/convert'),
    func = convert('toIterator', require('lib/lodash/toIterator'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
