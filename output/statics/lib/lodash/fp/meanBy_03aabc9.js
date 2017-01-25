var convert = require('lib/lodash/fp/convert'),
    func = convert('meanBy', require('lib/lodash/meanBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
