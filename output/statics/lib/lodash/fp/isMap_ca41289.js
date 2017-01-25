var convert = require('lib/lodash/fp/convert'),
    func = convert('isMap', require('lib/lodash/isMap'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
