var convert = require('lib/lodash/fp/convert'),
    func = convert('reverse', require('lib/lodash/reverse'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
