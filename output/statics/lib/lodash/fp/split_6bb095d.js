var convert = require('lib/lodash/fp/convert'),
    func = convert('split', require('lib/lodash/split'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
