var convert = require('lib/lodash/fp/convert'),
    func = convert('set', require('lib/lodash/set'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
