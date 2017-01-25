var convert = require('lib/lodash/fp/convert'),
    func = convert('valuesIn', require('lib/lodash/valuesIn'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
