var convert = require('lib/lodash/fp/convert'),
    func = convert('trimChars', require('lib/lodash/trim'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
