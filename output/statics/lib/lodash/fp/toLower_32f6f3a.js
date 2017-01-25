var convert = require('lib/lodash/fp/convert'),
    func = convert('toLower', require('lib/lodash/toLower'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
