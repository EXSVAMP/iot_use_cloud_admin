var convert = require('lib/lodash/fp/convert'),
    func = convert('ary', require('lib/lodash/ary'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
