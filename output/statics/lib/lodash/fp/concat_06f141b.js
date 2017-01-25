var convert = require('lib/lodash/fp/convert'),
    func = convert('concat', require('lib/lodash/concat'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
