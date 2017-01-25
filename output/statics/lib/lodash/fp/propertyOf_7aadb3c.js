var convert = require('lib/lodash/fp/convert'),
    func = convert('propertyOf', require('lib/lodash/propertyOf'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
