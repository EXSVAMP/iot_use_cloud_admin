var convert = require('lib/lodash/fp/convert'),
    func = convert('invokeArgs', require('lib/lodash/invoke'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
