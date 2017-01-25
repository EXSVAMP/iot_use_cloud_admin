var convert = require('lib/lodash/fp/convert'),
    func = convert('findLast', require('lib/lodash/findLast'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
