var convert = require('lib/lodash/fp/convert'),
    func = convert('unzipWith', require('lib/lodash/unzipWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
