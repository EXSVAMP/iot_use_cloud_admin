var convert = require('lib/lodash/fp/convert'),
    func = convert('mapValues', require('lib/lodash/mapValues'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
