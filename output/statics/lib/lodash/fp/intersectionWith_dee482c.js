var convert = require('lib/lodash/fp/convert'),
    func = convert('intersectionWith', require('lib/lodash/intersectionWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
