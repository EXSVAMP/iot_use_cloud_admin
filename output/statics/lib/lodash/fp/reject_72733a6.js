var convert = require('lib/lodash/fp/convert'),
    func = convert('reject', require('lib/lodash/reject'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
