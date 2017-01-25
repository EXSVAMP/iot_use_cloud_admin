var convert = require('lib/lodash/fp/convert'),
    func = convert('next', require('lib/lodash/next'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
