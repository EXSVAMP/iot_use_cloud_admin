var convert = require('lib/lodash/fp/convert'),
    func = convert('takeRight', require('lib/lodash/takeRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
