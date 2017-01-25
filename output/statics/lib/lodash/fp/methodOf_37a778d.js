var convert = require('lib/lodash/fp/convert'),
    func = convert('methodOf', require('lib/lodash/methodOf'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
