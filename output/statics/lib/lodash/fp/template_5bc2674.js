var convert = require('lib/lodash/fp/convert'),
    func = convert('template', require('lib/lodash/template'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
