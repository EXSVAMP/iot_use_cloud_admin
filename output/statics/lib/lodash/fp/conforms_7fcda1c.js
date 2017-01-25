var convert = require('lib/lodash/fp/convert'),
    func = convert('conforms', require('lib/lodash/conforms'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
