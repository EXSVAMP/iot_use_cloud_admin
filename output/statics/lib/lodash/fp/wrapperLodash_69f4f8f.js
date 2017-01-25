var convert = require('lib/lodash/fp/convert'),
    func = convert('wrapperLodash', require('lib/lodash/wrapperLodash'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
