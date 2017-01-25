var convert = require('lib/lodash/fp/convert'),
    func = convert('floor', require('lib/lodash/floor'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
