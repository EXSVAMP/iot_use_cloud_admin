var convert = require('lib/lodash/fp/convert'),
    func = convert('orderBy', require('lib/lodash/orderBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
