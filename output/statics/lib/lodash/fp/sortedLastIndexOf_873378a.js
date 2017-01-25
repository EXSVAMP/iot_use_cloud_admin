var convert = require('lib/lodash/fp/convert'),
    func = convert('sortedLastIndexOf', require('lib/lodash/sortedLastIndexOf'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
