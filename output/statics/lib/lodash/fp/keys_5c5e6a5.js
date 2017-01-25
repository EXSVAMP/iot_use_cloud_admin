var convert = require('lib/lodash/fp/convert'),
    func = convert('keys', require('lib/lodash/keys'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
