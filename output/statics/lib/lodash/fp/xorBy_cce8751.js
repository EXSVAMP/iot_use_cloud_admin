var convert = require('lib/lodash/fp/convert'),
    func = convert('xorBy', require('lib/lodash/xorBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
