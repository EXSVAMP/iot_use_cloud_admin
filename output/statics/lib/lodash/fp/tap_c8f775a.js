var convert = require('lib/lodash/fp/convert'),
    func = convert('tap', require('lib/lodash/tap'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
