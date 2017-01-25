var convert = require('lib/lodash/fp/convert'),
    func = convert('forEach', require('lib/lodash/forEach'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
