var convert = require('lib/lodash/fp/convert'),
    func = convert('sortedLastIndex', require('lib/lodash/sortedLastIndex'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
