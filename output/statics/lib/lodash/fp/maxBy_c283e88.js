var convert = require('lib/lodash/fp/convert'),
    func = convert('maxBy', require('lib/lodash/maxBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
