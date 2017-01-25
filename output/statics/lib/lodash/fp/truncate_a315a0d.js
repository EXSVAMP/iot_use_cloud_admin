var convert = require('lib/lodash/fp/convert'),
    func = convert('truncate', require('lib/lodash/truncate'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
