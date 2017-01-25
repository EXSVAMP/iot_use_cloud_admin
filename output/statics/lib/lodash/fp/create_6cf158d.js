var convert = require('lib/lodash/fp/convert'),
    func = convert('create', require('lib/lodash/create'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
