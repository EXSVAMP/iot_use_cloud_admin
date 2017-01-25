var convert = require('lib/lodash/fp/convert'),
    func = convert('overEvery', require('lib/lodash/overEvery'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
