var convert = require('lib/lodash/fp/convert'),
    func = convert('uniqWith', require('lib/lodash/uniqWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
