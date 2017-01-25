var convert = require('lib/lodash/fp/convert'),
    func = convert('isArguments', require('lib/lodash/isArguments'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
