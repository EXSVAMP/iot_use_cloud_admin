var convert = require('lib/lodash/fp/convert'),
    func = convert('mergeWith', require('lib/lodash/mergeWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
