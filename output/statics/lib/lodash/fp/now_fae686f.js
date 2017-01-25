var convert = require('lib/lodash/fp/convert'),
    func = convert('now', require('lib/lodash/now'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
