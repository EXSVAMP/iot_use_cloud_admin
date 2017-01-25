var convert = require('lib/lodash/fp/convert'),
    func = convert('result', require('lib/lodash/result'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
