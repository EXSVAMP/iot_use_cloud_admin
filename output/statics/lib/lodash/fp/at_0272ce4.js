var convert = require('lib/lodash/fp/convert'),
    func = convert('at', require('lib/lodash/at'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
