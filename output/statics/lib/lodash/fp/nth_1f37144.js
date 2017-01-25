var convert = require('lib/lodash/fp/convert'),
    func = convert('nth', require('lib/lodash/nth'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
