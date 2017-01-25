var convert = require('lib/lodash/fp/convert'),
    func = convert('min', require('lib/lodash/min'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
