var convert = require('lib/lodash/fp/convert'),
    func = convert('rangeRight', require('lib/lodash/rangeRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
