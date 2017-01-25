var convert = require('lib/lodash/fp/convert'),
    func = convert('invoke', require('lib/lodash/invoke'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
