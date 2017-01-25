var convert = require('lib/lodash/fp/convert'),
    func = convert('forIn', require('lib/lodash/forIn'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
