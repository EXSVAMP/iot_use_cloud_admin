var convert = require('lib/lodash/fp/convert'),
    func = convert('round', require('lib/lodash/round'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
