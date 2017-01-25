var convert = require('lib/lodash/fp/convert'),
    func = convert('castArray', require('lib/lodash/castArray'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
