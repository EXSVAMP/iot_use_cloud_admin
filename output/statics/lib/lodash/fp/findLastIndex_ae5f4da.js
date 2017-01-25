var convert = require('lib/lodash/fp/convert'),
    func = convert('findLastIndex', require('lib/lodash/findLastIndex'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
