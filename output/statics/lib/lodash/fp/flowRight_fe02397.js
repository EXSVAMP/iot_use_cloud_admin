var convert = require('lib/lodash/fp/convert'),
    func = convert('flowRight', require('lib/lodash/flowRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
