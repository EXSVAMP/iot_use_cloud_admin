var convert = require('lib/lodash/fp/convert'),
    func = convert('dropRightWhile', require('lib/lodash/dropRightWhile'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
