var convert = require('lib/lodash/fp/convert'),
    func = convert('trimStart', require('lib/lodash/trimStart'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
