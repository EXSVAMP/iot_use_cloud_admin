var convert = require('lib/lodash/fp/convert'),
    func = convert('zipWith', require('lib/lodash/zipWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
