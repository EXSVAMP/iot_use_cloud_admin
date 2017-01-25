var convert = require('lib/lodash/fp/convert'),
    func = convert('attempt', require('lib/lodash/attempt'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
