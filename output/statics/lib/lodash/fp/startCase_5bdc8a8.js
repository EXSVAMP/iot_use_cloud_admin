var convert = require('lib/lodash/fp/convert'),
    func = convert('startCase', require('lib/lodash/startCase'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
