var convert = require('lib/lodash/fp/convert'),
    func = convert('isFinite', require('lib/lodash/isFinite'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
