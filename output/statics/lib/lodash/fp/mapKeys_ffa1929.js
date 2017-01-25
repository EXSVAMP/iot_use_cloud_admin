var convert = require('lib/lodash/fp/convert'),
    func = convert('mapKeys', require('lib/lodash/mapKeys'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
