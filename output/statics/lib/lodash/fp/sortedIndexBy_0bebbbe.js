var convert = require('lib/lodash/fp/convert'),
    func = convert('sortedIndexBy', require('lib/lodash/sortedIndexBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
