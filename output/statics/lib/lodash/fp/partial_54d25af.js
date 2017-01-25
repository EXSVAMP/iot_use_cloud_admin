var convert = require('lib/lodash/fp/convert'),
    func = convert('partial', require('lib/lodash/partial'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
