var convert = require('lib/lodash/fp/convert'),
    func = convert('omitBy', require('lib/lodash/omitBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
