var convert = require('lib/lodash/fp/convert'),
    func = convert('invertBy', require('lib/lodash/invertBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
