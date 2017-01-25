var convert = require('lib/lodash/fp/convert'),
    func = convert('parseInt', require('lib/lodash/parseInt'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
