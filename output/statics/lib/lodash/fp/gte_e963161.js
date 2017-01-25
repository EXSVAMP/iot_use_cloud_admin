var convert = require('lib/lodash/fp/convert'),
    func = convert('gte', require('lib/lodash/gte'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
