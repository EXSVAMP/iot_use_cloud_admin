var convert = require('lib/lodash/fp/convert'),
    func = convert('after', require('lib/lodash/after'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
