var convert = require('lib/lodash/fp/convert'),
    func = convert('takeWhile', require('lib/lodash/takeWhile'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
