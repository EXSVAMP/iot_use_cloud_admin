var convert = require('lib/lodash/fp/convert'),
    func = convert('map', require('lib/lodash/map'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
