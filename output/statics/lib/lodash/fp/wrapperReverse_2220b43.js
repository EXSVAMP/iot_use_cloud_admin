var convert = require('lib/lodash/fp/convert'),
    func = convert('wrapperReverse', require('lib/lodash/wrapperReverse'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
