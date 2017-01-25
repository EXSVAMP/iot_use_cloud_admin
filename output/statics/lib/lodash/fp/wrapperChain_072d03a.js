var convert = require('lib/lodash/fp/convert'),
    func = convert('wrapperChain', require('lib/lodash/wrapperChain'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
