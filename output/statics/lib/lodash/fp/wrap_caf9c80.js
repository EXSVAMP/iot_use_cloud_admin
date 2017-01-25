var convert = require('lib/lodash/fp/convert'),
    func = convert('wrap', require('lib/lodash/wrap'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
