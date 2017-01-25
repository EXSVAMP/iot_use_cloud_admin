var convert = require('lib/lodash/fp/convert'),
    func = convert('lastIndexOf', require('lib/lodash/lastIndexOf'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
