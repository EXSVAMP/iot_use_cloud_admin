var convert = require('lib/lodash/fp/convert'),
    func = convert('union', require('lib/lodash/union'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
