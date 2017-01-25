var convert = require('lib/lodash/fp/convert'),
    func = convert('capitalize', require('lib/lodash/capitalize'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
