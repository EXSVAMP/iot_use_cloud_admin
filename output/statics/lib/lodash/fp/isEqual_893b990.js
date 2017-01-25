var convert = require('lib/lodash/fp/convert'),
    func = convert('isEqual', require('lib/lodash/isEqual'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
