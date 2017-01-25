var convert = require('lib/lodash/fp/convert'),
    func = convert('assignWith', require('lib/lodash/assignWith'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
