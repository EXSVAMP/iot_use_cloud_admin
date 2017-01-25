var convert = require('lib/lodash/fp/convert'),
    func = convert('difference', require('lib/lodash/difference'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
