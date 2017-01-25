var convert = require('lib/lodash/fp/convert'),
    func = convert('take', require('lib/lodash/take'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
