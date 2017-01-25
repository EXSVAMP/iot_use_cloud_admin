var convert = require('lib/lodash/fp/convert'),
    func = convert('reduce', require('lib/lodash/reduce'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
