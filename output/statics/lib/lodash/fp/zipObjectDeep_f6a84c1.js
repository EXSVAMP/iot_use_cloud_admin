var convert = require('lib/lodash/fp/convert'),
    func = convert('zipObjectDeep', require('lib/lodash/zipObjectDeep'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
