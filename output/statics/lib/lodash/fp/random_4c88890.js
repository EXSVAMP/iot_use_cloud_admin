var convert = require('lib/lodash/fp/convert'),
    func = convert('random', require('lib/lodash/random'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
