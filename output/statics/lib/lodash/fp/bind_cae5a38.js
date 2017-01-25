var convert = require('lib/lodash/fp/convert'),
    func = convert('bind', require('lib/lodash/bind'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
