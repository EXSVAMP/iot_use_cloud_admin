var convert = require('lib/lodash/fp/convert'),
    func = convert('intersection', require('lib/lodash/intersection'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
