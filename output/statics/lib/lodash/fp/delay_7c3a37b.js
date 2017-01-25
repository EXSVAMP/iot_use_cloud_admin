var convert = require('lib/lodash/fp/convert'),
    func = convert('delay', require('lib/lodash/delay'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
