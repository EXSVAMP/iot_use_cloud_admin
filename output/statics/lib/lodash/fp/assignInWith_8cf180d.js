var convert = require('lib/lodash/fp/convert'),
    func = convert('assignInWith', require('lib/lodash/assignInWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
