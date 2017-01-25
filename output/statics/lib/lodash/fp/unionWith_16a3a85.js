var convert = require('lib/lodash/fp/convert'),
    func = convert('unionWith', require('lib/lodash/unionWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
