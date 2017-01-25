var convert = require('lib/lodash/fp/convert'),
    func = convert('endsWith', require('lib/lodash/endsWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
