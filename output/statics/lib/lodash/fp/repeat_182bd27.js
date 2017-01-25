var convert = require('lib/lodash/fp/convert'),
    func = convert('repeat', require('lib/lodash/repeat'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
