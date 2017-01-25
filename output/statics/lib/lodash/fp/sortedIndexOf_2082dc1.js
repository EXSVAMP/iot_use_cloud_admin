var convert = require('lib/lodash/fp/convert'),
    func = convert('sortedIndexOf', require('lib/lodash/sortedIndexOf'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
