var convert = require('lib/lodash/fp/convert'),
    func = convert('keysIn', require('lib/lodash/keysIn'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
