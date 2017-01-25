var convert = require('lib/lodash/fp/convert'),
    func = convert('constant', require('lib/lodash/constant'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
