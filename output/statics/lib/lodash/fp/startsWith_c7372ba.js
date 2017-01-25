var convert = require('lib/lodash/fp/convert'),
    func = convert('startsWith', require('lib/lodash/startsWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
