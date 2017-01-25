var convert = require('lib/lodash/fp/convert'),
    func = convert('without', require('lib/lodash/without'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
