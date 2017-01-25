var convert = require('lib/lodash/fp/convert'),
    func = convert('differenceBy', require('lib/lodash/differenceBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
