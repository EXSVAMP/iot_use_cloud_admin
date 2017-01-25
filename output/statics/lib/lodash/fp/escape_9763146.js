var convert = require('lib/lodash/fp/convert'),
    func = convert('escape', require('lib/lodash/escape'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
