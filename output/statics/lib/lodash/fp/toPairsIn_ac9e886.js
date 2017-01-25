var convert = require('lib/lodash/fp/convert'),
    func = convert('toPairsIn', require('lib/lodash/toPairsIn'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
