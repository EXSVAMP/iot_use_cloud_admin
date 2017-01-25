var convert = require('lib/lodash/fp/convert'),
    func = convert('sum', require('lib/lodash/sum'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
