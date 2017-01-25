var convert = require('lib/lodash/fp/convert'),
    func = convert('flip', require('lib/lodash/flip'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
