var convert = require('lib/lodash/fp/convert'),
    func = convert('lte', require('lib/lodash/lte'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
