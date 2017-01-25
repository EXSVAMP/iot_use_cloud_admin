var convert = require('lib/lodash/fp/convert'),
    func = convert('isNaN', require('lib/lodash/isNaN'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
