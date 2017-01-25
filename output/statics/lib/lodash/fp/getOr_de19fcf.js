var convert = require('lib/lodash/fp/convert'),
    func = convert('getOr', require('lib/lodash/get'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
