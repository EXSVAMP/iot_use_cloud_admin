var convert = require('lib/lodash/fp/convert'),
    func = convert('partition', require('lib/lodash/partition'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
