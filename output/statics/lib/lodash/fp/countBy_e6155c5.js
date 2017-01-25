var convert = require('lib/lodash/fp/convert'),
    func = convert('countBy', require('lib/lodash/countBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
