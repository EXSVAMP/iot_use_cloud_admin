var convert = require('lib/lodash/fp/convert'),
    func = convert('curryRightN', require('lib/lodash/curryRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
