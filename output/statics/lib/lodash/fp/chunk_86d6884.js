var convert = require('lib/lodash/fp/convert'),
    func = convert('chunk', require('lib/lodash/chunk'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
