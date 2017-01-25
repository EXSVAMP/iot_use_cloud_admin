var convert = require('lib/lodash/fp/convert'),
    func = convert('takeRightWhile', require('lib/lodash/takeRightWhile'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
