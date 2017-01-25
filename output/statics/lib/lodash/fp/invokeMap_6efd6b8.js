var convert = require('lib/lodash/fp/convert'),
    func = convert('invokeMap', require('lib/lodash/invokeMap'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
