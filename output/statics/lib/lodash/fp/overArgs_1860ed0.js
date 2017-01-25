var convert = require('lib/lodash/fp/convert'),
    func = convert('overArgs', require('lib/lodash/overArgs'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
