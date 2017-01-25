var convert = require('lib/lodash/fp/convert'),
    func = convert('pullAt', require('lib/lodash/pullAt'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
