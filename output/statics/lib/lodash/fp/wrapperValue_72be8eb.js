var convert = require('lib/lodash/fp/convert'),
    func = convert('wrapperValue', require('lib/lodash/wrapperValue'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
