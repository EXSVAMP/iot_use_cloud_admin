var convert = require('lib/lodash/fp/convert'),
    func = convert('times', require('lib/lodash/times'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
