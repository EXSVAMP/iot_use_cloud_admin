var convert = require('lib/lodash/fp/convert'),
    func = convert('isNil', require('lib/lodash/isNil'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
