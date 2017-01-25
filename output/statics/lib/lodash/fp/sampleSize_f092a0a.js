var convert = require('lib/lodash/fp/convert'),
    func = convert('sampleSize', require('lib/lodash/sampleSize'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
