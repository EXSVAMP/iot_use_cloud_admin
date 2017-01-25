var convert = require('lib/lodash/fp/convert'),
    func = convert('xorWith', require('lib/lodash/xorWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
