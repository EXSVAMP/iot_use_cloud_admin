var convert = require('lib/lodash/fp/convert'),
    func = convert('flow', require('lib/lodash/flow'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
