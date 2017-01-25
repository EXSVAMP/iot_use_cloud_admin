var convert = require('lib/lodash/fp/convert'),
    func = convert('isEqualWith', require('lib/lodash/isEqualWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
