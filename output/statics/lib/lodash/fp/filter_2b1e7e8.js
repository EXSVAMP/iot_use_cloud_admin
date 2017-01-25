var convert = require('lib/lodash/fp/convert'),
    func = convert('filter', require('lib/lodash/filter'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
