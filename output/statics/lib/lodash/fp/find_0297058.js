var convert = require('lib/lodash/fp/convert'),
    func = convert('find', require('lib/lodash/find'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
