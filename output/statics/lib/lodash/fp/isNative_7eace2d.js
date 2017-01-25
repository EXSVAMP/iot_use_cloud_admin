var convert = require('lib/lodash/fp/convert'),
    func = convert('isNative', require('lib/lodash/isNative'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
