var convert = require('lib/lodash/fp/convert'),
    func = convert('divide', require('lib/lodash/divide'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
