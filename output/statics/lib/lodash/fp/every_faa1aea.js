var convert = require('lib/lodash/fp/convert'),
    func = convert('every', require('lib/lodash/every'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
