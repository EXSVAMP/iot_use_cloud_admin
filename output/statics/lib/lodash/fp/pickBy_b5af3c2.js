var convert = require('lib/lodash/fp/convert'),
    func = convert('pickBy', require('lib/lodash/pickBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
