var convert = require('lib/lodash/fp/convert'),
    func = convert('groupBy', require('lib/lodash/groupBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
