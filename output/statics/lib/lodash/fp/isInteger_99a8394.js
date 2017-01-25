var convert = require('lib/lodash/fp/convert'),
    func = convert('isInteger', require('lib/lodash/isInteger'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
