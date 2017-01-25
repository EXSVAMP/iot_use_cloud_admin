var convert = require('lib/lodash/fp/convert'),
    func = convert('cloneDeepWith', require('lib/lodash/cloneDeepWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
