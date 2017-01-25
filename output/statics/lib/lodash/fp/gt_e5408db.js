var convert = require('lib/lodash/fp/convert'),
    func = convert('gt', require('lib/lodash/gt'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
