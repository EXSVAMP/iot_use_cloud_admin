var convert = require('lib/lodash/fp/convert'),
    func = convert('matches', require('lib/lodash/matches'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
