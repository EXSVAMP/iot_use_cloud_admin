var convert = require('lib/lodash/fp/convert'),
    func = convert('pad', require('lib/lodash/pad'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
