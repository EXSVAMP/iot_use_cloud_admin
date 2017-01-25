var convert = require('lib/lodash/fp/convert'),
    func = convert('transform', require('lib/lodash/transform'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
