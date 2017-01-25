var convert = require('lib/lodash/fp/convert'),
    func = convert('isElement', require('lib/lodash/isElement'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
