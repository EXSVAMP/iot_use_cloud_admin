var convert = require('lib/lodash/fp/convert'),
    func = convert('initial', require('lib/lodash/initial'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
