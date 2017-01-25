var convert = require('lib/lodash/fp/convert'),
    func = convert('pullAllWith', require('lib/lodash/pullAllWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
