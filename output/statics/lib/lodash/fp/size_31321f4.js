var convert = require('lib/lodash/fp/convert'),
    func = convert('size', require('lib/lodash/size'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
