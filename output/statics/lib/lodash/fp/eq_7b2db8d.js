var convert = require('lib/lodash/fp/convert'),
    func = convert('eq', require('lib/lodash/eq'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
