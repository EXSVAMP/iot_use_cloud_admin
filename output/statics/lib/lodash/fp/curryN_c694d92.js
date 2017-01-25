var convert = require('lib/lodash/fp/convert'),
    func = convert('curryN', require('lib/lodash/curry'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
