var convert = require('lib/lodash/fp/convert'),
    func = convert('shuffle', require('lib/lodash/shuffle'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
