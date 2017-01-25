var convert = require('lib/lodash/fp/convert'),
    func = convert('restFrom', require('lib/lodash/rest'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
