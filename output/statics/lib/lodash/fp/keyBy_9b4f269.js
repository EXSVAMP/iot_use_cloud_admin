var convert = require('lib/lodash/fp/convert'),
    func = convert('keyBy', require('lib/lodash/keyBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
