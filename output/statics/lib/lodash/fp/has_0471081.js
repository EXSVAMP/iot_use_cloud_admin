var convert = require('lib/lodash/fp/convert'),
    func = convert('has', require('lib/lodash/has'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
