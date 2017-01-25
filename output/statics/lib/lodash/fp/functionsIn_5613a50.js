var convert = require('lib/lodash/fp/convert'),
    func = convert('functionsIn', require('lib/lodash/functionsIn'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
