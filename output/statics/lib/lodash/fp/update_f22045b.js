var convert = require('lib/lodash/fp/convert'),
    func = convert('update', require('lib/lodash/update'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
