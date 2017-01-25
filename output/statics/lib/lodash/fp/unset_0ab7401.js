var convert = require('lib/lodash/fp/convert'),
    func = convert('unset', require('lib/lodash/unset'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
