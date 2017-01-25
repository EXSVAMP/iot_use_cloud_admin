var convert = require('lib/lodash/fp/convert'),
    func = convert('defaults', require('lib/lodash/defaults'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
