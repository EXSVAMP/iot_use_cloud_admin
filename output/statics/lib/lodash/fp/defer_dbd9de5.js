var convert = require('lib/lodash/fp/convert'),
    func = convert('defer', require('lib/lodash/defer'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
