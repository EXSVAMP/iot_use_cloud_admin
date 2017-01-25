var convert = require('lib/lodash/fp/convert'),
    func = convert('before', require('lib/lodash/before'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
