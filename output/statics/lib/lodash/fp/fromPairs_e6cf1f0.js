var convert = require('lib/lodash/fp/convert'),
    func = convert('fromPairs', require('lib/lodash/fromPairs'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
