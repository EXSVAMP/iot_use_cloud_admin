var convert = require('lib/lodash/fp/convert'),
    func = convert('forOwn', require('lib/lodash/forOwn'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
