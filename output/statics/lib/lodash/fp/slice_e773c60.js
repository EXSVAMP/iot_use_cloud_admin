var convert = require('lib/lodash/fp/convert'),
    func = convert('slice', require('lib/lodash/slice'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
