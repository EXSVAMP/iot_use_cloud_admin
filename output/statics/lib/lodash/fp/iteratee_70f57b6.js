var convert = require('lib/lodash/fp/convert'),
    func = convert('iteratee', require('lib/lodash/iteratee'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
