var convert = require('lib/lodash/fp/convert'),
    func = convert('cloneWith', require('lib/lodash/cloneWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
