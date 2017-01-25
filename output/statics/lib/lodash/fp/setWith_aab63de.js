var convert = require('lib/lodash/fp/convert'),
    func = convert('setWith', require('lib/lodash/setWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
