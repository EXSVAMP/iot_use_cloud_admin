var convert = require('lib/lodash/fp/convert'),
    func = convert('dropWhile', require('lib/lodash/dropWhile'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
