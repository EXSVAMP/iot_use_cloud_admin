var convert = require('lib/lodash/fp/convert'),
    func = convert('sortedUniq', require('lib/lodash/sortedUniq'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
