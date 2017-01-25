var convert = require('lib/lodash/fp/convert'),
    func = convert('max', require('lib/lodash/max'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
