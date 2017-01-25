var convert = require('lib/lodash/fp/convert'),
    func = convert('values', require('lib/lodash/values'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
