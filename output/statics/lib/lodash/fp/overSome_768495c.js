var convert = require('lib/lodash/fp/convert'),
    func = convert('overSome', require('lib/lodash/overSome'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
