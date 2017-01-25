var convert = require('lib/lodash/fp/convert'),
    func = convert('updateWith', require('lib/lodash/updateWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
