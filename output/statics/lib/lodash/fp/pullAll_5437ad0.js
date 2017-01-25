var convert = require('lib/lodash/fp/convert'),
    func = convert('pullAll', require('lib/lodash/pullAll'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
