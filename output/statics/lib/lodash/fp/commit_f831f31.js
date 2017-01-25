var convert = require('lib/lodash/fp/convert'),
    func = convert('commit', require('lib/lodash/commit'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
