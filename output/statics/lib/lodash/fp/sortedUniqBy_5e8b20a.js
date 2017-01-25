var convert = require('lib/lodash/fp/convert'),
    func = convert('sortedUniqBy', require('lib/lodash/sortedUniqBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
