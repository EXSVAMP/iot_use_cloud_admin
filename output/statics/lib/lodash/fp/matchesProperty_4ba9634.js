var convert = require('lib/lodash/fp/convert'),
    func = convert('matchesProperty', require('lib/lodash/matchesProperty'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
