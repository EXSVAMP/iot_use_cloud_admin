var convert = require('lib/lodash/fp/convert'),
    func = convert('once', require('lib/lodash/once'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
