var convert = require('lib/lodash/fp/convert'),
    func = convert('mixin', require('lib/lodash/mixin'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
