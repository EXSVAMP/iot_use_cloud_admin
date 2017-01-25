var convert = require('lib/lodash/fp/convert'),
    func = convert('wrapperAt', require('lib/lodash/wrapperAt'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
