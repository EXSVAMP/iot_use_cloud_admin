var convert = require('lib/lodash/fp/convert'),
    func = convert('replace', require('lib/lodash/replace'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
