var convert = require('lib/lodash/fp/convert'),
    func = convert('uniqueId', require('lib/lodash/uniqueId'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
