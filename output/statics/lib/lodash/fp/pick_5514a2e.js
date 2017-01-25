var convert = require('lib/lodash/fp/convert'),
    func = convert('pick', require('lib/lodash/pick'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
