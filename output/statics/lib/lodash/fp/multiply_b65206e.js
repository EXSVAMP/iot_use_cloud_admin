var convert = require('lib/lodash/fp/convert'),
    func = convert('multiply', require('lib/lodash/multiply'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
