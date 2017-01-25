var convert = require('lib/lodash/fp/convert'),
    func = convert('join', require('lib/lodash/join'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
