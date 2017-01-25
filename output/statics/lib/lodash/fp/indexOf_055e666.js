var convert = require('lib/lodash/fp/convert'),
    func = convert('indexOf', require('lib/lodash/indexOf'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
