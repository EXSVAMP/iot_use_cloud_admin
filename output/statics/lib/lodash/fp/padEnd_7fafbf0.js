var convert = require('lib/lodash/fp/convert'),
    func = convert('padEnd', require('lib/lodash/padEnd'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
