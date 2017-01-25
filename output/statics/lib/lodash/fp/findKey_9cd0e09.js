var convert = require('lib/lodash/fp/convert'),
    func = convert('findKey', require('lib/lodash/findKey'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
