var convert = require('lib/lodash/fp/convert'),
    func = convert('flatMap', require('lib/lodash/flatMap'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
