var convert = require('lib/lodash/fp/convert'),
    func = convert('cond', require('lib/lodash/cond'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
