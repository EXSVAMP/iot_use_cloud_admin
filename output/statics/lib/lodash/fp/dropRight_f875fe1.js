var convert = require('lib/lodash/fp/convert'),
    func = convert('dropRight', require('lib/lodash/dropRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
