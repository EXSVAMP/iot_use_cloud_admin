var convert = require('lib/lodash/fp/convert'),
    func = convert('rearg', require('lib/lodash/rearg'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
