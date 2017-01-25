var convert = require('lib/lodash/fp/convert'),
    func = convert('unionBy', require('lib/lodash/unionBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
