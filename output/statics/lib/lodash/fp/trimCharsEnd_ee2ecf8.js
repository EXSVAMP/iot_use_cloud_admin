var convert = require('lib/lodash/fp/convert'),
    func = convert('trimCharsEnd', require('lib/lodash/trimEnd'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
