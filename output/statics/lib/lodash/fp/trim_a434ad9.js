var convert = require('lib/lodash/fp/convert'),
    func = convert('trim', require('lib/lodash/trim'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
