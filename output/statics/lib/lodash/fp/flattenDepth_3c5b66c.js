var convert = require('lib/lodash/fp/convert'),
    func = convert('flattenDepth', require('lib/lodash/flattenDepth'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
