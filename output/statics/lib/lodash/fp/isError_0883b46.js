var convert = require('lib/lodash/fp/convert'),
    func = convert('isError', require('lib/lodash/isError'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
