var convert = require('lib/lodash/fp/convert'),
    func = convert('over', require('lib/lodash/over'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
