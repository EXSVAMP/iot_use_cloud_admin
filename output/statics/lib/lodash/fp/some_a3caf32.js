var convert = require('lib/lodash/fp/convert'),
    func = convert('some', require('lib/lodash/some'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
