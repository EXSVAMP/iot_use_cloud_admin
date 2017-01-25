var convert = require('lib/lodash/fp/convert'),
    func = convert('words', require('lib/lodash/words'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
