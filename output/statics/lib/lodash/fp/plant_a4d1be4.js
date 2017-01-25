var convert = require('lib/lodash/fp/convert'),
    func = convert('plant', require('lib/lodash/plant'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
