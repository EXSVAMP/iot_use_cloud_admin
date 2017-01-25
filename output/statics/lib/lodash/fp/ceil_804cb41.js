var convert = require('lib/lodash/fp/convert'),
    func = convert('ceil', require('lib/lodash/ceil'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
