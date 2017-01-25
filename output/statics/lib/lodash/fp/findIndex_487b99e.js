var convert = require('lib/lodash/fp/convert'),
    func = convert('findIndex', require('lib/lodash/findIndex'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
