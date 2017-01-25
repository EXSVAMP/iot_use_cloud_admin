var convert = require('lib/lodash/fp/convert'),
    func = convert('xor', require('lib/lodash/xor'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
