var convert = require('lib/lodash/fp/convert'),
    func = convert('flatMapDeep', require('lib/lodash/flatMapDeep'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
