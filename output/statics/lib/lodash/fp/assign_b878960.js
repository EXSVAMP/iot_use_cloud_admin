var convert = require('lib/lodash/fp/convert'),
    func = convert('assign', require('lib/lodash/assign'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
