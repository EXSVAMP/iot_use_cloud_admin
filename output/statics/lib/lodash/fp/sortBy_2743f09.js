var convert = require('lib/lodash/fp/convert'),
    func = convert('sortBy', require('lib/lodash/sortBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
