var convert = require('lib/lodash/fp/convert'),
    func = convert('differenceWith', require('lib/lodash/differenceWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
