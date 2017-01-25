var convert = require('lib/lodash/fp/convert'),
    func = convert('sumBy', require('lib/lodash/sumBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
