var convert = require('lib/lodash/fp/convert'),
    func = convert('clamp', require('lib/lodash/clamp'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
