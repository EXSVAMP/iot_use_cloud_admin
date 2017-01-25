var convert = require('lib/lodash/fp/convert'),
    func = convert('padStart', require('lib/lodash/padStart'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
