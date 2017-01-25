var convert = require('lib/lodash/fp/convert'),
    func = convert('isMatchWith', require('lib/lodash/isMatchWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
