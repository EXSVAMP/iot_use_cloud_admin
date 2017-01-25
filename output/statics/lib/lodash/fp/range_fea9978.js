var convert = require('lib/lodash/fp/convert'),
    func = convert('range', require('lib/lodash/range'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
