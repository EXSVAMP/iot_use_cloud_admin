var convert = require('lib/lodash/fp/convert'),
    func = convert('add', require('lib/lodash/add'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
