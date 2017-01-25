var convert = require('lib/lodash/fp/convert'),
    func = convert('lt', require('lib/lodash/lt'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
