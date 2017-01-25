var convert = require('lib/lodash/fp/convert'),
    func = convert('zip', require('lib/lodash/zip'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
