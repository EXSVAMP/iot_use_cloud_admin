var convert = require('lib/lodash/fp/convert'),
    func = convert('findLastKey', require('lib/lodash/findLastKey'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
