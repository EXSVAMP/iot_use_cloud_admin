var convert = require('lib/lodash/fp/convert'),
    func = convert('invert', require('lib/lodash/invert'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
