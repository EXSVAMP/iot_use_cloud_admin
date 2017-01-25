var convert = require('lib/lodash/fp/convert'),
    func = convert('isLength', require('lib/lodash/isLength'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
