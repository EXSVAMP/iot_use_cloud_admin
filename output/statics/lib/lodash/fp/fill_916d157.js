var convert = require('lib/lodash/fp/convert'),
    func = convert('fill', require('lib/lodash/fill'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
