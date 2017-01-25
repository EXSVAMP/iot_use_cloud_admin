var convert = require('lib/lodash/fp/convert'),
    func = convert('defaultsDeep', require('lib/lodash/defaultsDeep'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
