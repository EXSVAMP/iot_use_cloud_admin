var convert = require('lib/lodash/fp/convert'),
    func = convert('cloneDeep', require('lib/lodash/cloneDeep'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
