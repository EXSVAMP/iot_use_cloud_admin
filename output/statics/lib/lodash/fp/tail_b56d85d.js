var convert = require('lib/lodash/fp/convert'),
    func = convert('tail', require('lib/lodash/tail'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
