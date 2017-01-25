var convert = require('lib/lodash/fp/convert'),
    func = convert('zipObject', require('lib/lodash/zipObject'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
