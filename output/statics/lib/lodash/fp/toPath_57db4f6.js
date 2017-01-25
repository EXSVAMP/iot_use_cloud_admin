var convert = require('lib/lodash/fp/convert'),
    func = convert('toPath', require('lib/lodash/toPath'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
