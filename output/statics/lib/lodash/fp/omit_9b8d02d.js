var convert = require('lib/lodash/fp/convert'),
    func = convert('omit', require('lib/lodash/omit'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
