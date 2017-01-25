var convert = require('lib/lodash/fp/convert'),
    func = convert('flatMapDepth', require('lib/lodash/flatMapDepth'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
