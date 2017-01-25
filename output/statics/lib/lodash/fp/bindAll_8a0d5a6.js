var convert = require('lib/lodash/fp/convert'),
    func = convert('bindAll', require('lib/lodash/bindAll'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
