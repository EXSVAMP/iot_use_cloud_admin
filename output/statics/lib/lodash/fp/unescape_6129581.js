var convert = require('lib/lodash/fp/convert'),
    func = convert('unescape', require('lib/lodash/unescape'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
