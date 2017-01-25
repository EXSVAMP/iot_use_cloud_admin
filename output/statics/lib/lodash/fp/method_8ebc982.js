var convert = require('lib/lodash/fp/convert'),
    func = convert('method', require('lib/lodash/method'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
