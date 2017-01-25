var convert = require('lib/lodash/fp/convert'),
    func = convert('spreadFrom', require('lib/lodash/spread'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
