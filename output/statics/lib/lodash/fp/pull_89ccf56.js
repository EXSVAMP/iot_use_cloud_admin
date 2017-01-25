var convert = require('lib/lodash/fp/convert'),
    func = convert('pull', require('lib/lodash/pull'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
