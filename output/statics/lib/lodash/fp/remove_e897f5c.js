var convert = require('lib/lodash/fp/convert'),
    func = convert('remove', require('lib/lodash/remove'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
