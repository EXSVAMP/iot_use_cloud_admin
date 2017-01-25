var convert = require('lib/lodash/fp/convert'),
    func = convert('memoize', require('lib/lodash/memoize'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
