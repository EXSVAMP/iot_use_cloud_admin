var convert = require('lib/lodash/fp/convert'),
    func = convert('includes', require('lib/lodash/includes'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
