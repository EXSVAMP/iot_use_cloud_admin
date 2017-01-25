var convert = require('lib/lodash/fp/convert'),
    func = convert('minBy', require('lib/lodash/minBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
